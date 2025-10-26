import { createSigner, createVerifier } from "fast-jwt";
import { env } from "src/common/env";
import z from "zod";

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
  verify(payload: AuthOptions) {
    try {
      AUTH_SCHEMA.parse(payload)
      //@ts-expect-error
      verifier(payload);
    } catch (error) { }
  },
  sign
}
