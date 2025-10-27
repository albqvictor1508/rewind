import z from "zod";

export namespace AuthModel {
  export const PASSWORD_SCHEMA = z.string()
    .min(6)
    .max(30)
    .refine((input) => {
      const hasNumber = /\d/.test(input);
      const hasUppercase = /[A-Z]/.test(input);
      const onlyAllowedChars = /^[a-zA-Z0-9@]*$/.test(input);
      return hasNumber && hasUppercase && onlyAllowedChars;
    }, {
      message: "A senha deve conter pelo menos um número, uma letra maiúscula e apenas '@' como caractere especial."
    });

  export const USERNAME_SCHEMA = z.string()
    .min(6)
    .max(30)
    .refine((input) => /^[a-zA-Z0-9]*$/.test(input), {
      message: "O nome de usuário não pode conter caracteres especiais."
    });

  export const SIGNUP_SCHEMA = z.object({
    username: USERNAME_SCHEMA,
    email: z.email(),
    password: PASSWORD_SCHEMA,
  });

  export const RESEND_CODE_SCHEMA = z.object({
    email: z.email(),
  });

  export const LOGIN_SCHEMA = z.object({
    email: z.email(),
    password: PASSWORD_SCHEMA
  })
}
