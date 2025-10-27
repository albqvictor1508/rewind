import z from "zod";
import { AuthModel } from "../auth/model";

export namespace UserModel {
  export const UPDATE_SCHEMA = z.object({
    name: z.optional(AuthModel.USERNAME_SCHEMA),
    email: z.optional(z.email()),
    password: z.optional(AuthModel.PASSWORD_SCHEMA),
  });
}
