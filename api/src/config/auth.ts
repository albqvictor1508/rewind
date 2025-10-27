import { createSigner, createVerifier } from "fast-jwt";
import { env } from "src/common/env";
import z from "zod";
import type { Request, Response, NextFunction } from "express";

const { JWT_SECRET } = env

const verifier = createVerifier({ key: JWT_SECRET })
export const sign = createSigner({ key: JWT_SECRET, expiresIn: '15m' })

const AUTH_SCHEMA = z.object({
  id: z.uuid(),
  email: z.email()
})

interface AuthOptions {
  id: string;
  email: string;
}

export const auth = {
  verify(token: string): AuthOptions | null {
    try {
      const payload = verifier(token);
      AUTH_SCHEMA.parse(payload);
      return payload as AuthOptions;
    } catch (error) {
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

    if (NON_AUTH_ROUTES.includes(req.path)) {
      return next();
    }

    const token = req.cookies.movies_auth;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = auth.verify(token);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // @ts-expect-error
    req.user = user;
    next();
  }
}
