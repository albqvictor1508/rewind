import { randomBytes } from "node:crypto";

export class UserService {
  public static genCode() {
    return randomBytes(3).toString('hex').toUpperCase()
  }
}
