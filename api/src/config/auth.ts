import { createSigner, createVerifier } from "fast-jwt";
import { env } from "src/common/env";
import z, { type ZodSchema } from "zod";
import type { Request, Response, NextFunction } from "express";
import chalk from "chalk";

const { SECRET } = env

const verifier = createVerifier({ key: SECRET })
export const sign = createSigner({ key: SECRET, expiresIn: '15m' })

const AUTH_SCHEMA = z.object({
  id: z.uuid(),
  email: z.email()
})

interface AuthOptions {
  id: string;
  email: string;
}

export const auth = {
  validate(bodySchema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        bodySchema.parse(req.body);
        return next();
      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({
            message: "Validation error",
            errors: error.flatten(),
          });
        }
        return res.status(500).json({ message: "Internal server error" });
      }
    };
  },
  verify(token: string): AuthOptions | null {
    try {
      const payload = verifier(token);
      console.log(chalk.green("Decoded JWT payload:"), payload);
      AUTH_SCHEMA.parse(payload);
      return payload as AuthOptions;
    } catch (error) {
      console.error(chalk.red("Token verification failed:"), error);
      return null;
    }
  },

  sign,

  authenticate(req: Request, res: Response, next: NextFunction) {
    const NON_AUTH_ROUTES = [
      "/health",
      "/auth/signup",
      "/auth/login",
      "/auth/signup/:code",
    ];

    if (NON_AUTH_ROUTES.some(route => req.originalUrl.startsWith(route))) {
      return next();
    }

    console.log("cookies =>", req.cookies);
    console.log("movies_auth =>", req.cookies.movies_auth);
    const token = req.cookies.movies_auth;
    console.log('OK 1')
    if (!token) return res.status(401).json("Unauthorized");

    console.log('OK 2')
    const user = this.verify(token);

    if (!user) return res.status(401).json("Unauthorized");

    // @ts-expect-error
    req.user = user;
    next();
  }
}
