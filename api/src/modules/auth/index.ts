import { eq, or } from "drizzle-orm";
import { Router } from "express";
import { db } from "src/db/client";
import { users } from "src/db/schema/users";
import z from "zod";
import bcrypt from "bcryptjs"
import { UserService } from "./service";
import { FIVE_MINUTES_IN_MS, redis } from "src/common/redis";
import { auth } from "src/config/auth";
import { mail } from "src/common/mail";
import { AuthModel } from "./model";

export const authRoutes = Router();

authRoutes.post(
  "/auth/signup",
  async (request, response) => {
    const { error: parseError } = AuthModel.SIGNUP_SCHEMA.safeParse(request.body)
    if (parseError) return response.status(400).json(parseError);

    const { username, email } = request.body;
    const [hasCredentialsTaken] = await db.select({
      id: users.id
    })
      .from(users)
      .where(
        or(
          eq(users.email, email), eq(users.name, username)
        )
      )
    if (hasCredentialsTaken) return response.status(400).json("Email or username has taken by another user")

    const REDIS_KEY = `codes:${email}`;

    const code = await redis.get(REDIS_KEY);
    if (code) return response.status(200).json("A code has been already sent to this email.");

    const newCode = UserService.genCode();
    await Promise.all([
      mail({ to: email, subject: "Seu código comédia", text: newCode }),
      redis.setex(REDIS_KEY, FIVE_MINUTES_IN_MS, JSON.stringify(newCode))
    ]);


    return response.status(200).json()
  }
)

authRoutes.post(
  "/auth/signup/:code",
  async (request, response) => {
    const { error: parseError } = AuthModel.SIGNUP_SCHEMA.safeParse(request.body)
    if (parseError) return response.status(400).json(parseError);

    const { username, email, password } = request.body;

    const REDIS_KEY = `codes:${email}`;
    const { code } = request.params;
    //@ts-expect-error
    const storedCode = JSON.parse(await redis.get(REDIS_KEY));
    if (!storedCode || code !== storedCode)
      return response
        .status(400)
        .json("Invalid or expired code.")

    const hashed = await bcrypt.hash(password, 10)
    const [user] = await db.
      insert(users)
      .values({
        name: username,
        displayName: '',
        email,
        password: hashed
      }).returning({ id: users.id });
    if (!user) return response.status(400).json("Error to create user.");

    const { id } = user;
    const token = auth.sign({ id, email })

    response.cookie("movies_auth", token, { httpOnly: true, secure: true })

    return response.status(201).json();
  }
)

authRoutes.post(
  "/auth/code/resend",
  async (request, response) => {
    const { error: parseError } = AuthModel.RESEND_CODE_SCHEMA.safeParse(request.body);
    if (parseError) return response.status(400).json(parseError);
    const { email } = request.body;

    const REDIS_KEY = `codes:${email}`
    if (await redis.exists(REDIS_KEY)) await redis.del(REDIS_KEY)

    const code = UserService.genCode();

    await Promise.all([
      mail({ to: email, subject: "Seu código comédia", text: code }),
      redis.setex(REDIS_KEY, FIVE_MINUTES_IN_MS, JSON.stringify(code))
    ]);

    return response.status(200).json();
  }
)

authRoutes.post(
  "/auth/login",
  async (request, response) => {
    const { error: parseError } = AuthModel.LOGIN_SCHEMA.safeParse(request.body);
    if (parseError) return response.status(400).json(parseError);

    const { email, password } = request.body;
    const [user] = await db.select({
      id: users.id,
      email: users.email,
      password: users.password
    })
      .from(users)
      .where(
        eq(users.email, email)
      );
    if (!user) return response.status(400).json("There is no user with this email")

    const isPasswordMatch = await bcrypt.compare(password, user.password!)
    if (!isPasswordMatch) return response.status(400).json("Invalid password")

    const token = auth.sign({ id: user.id, email: user.email });

    response.cookie("movies_auth", token, {
      httpOnly: true,
      secure: true,
    });

    await mail({ to: email, subject: "Fez login viadinho!!" })

    return response.status(200).json()
  }
)
