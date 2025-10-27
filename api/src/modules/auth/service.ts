import { eq } from "drizzle-orm";
import { randomBytes } from "node:crypto";
import { env } from "src/common/env";
import { db } from "src/db/client";
import { users } from "src/db/schema/users";


type OAuthProvider = 'google' | 'github';

const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CALLBACK_URL,
  AUTH0_AUDIENCE
} = env;

export class AuthService {
  public static genCode() {
    return randomBytes(3).toString('hex').toUpperCase()
  }

  public static async authenticateWithProvider(provider?: OAuthProvider) {
    const params = new URLSearchParams();

    params.append('response_type', 'code');
    params.append('client_id', AUTH0_CLIENT_ID);
    params.append('redirect_uri', AUTH0_CALLBACK_URL);
    params.append('scope', 'openid profile email');
    params.append('audience', AUTH0_AUDIENCE);

    if (provider) {
      const connection = provider === 'google' ? 'google-oauth2' : 'GitHub';
      params.append('connection', connection);
    }

    return `https://${AUTH0_DOMAIN}/authorize?${params.toString()}`;
  }

  public static async softDeleteUser(userId: string) {
    const [result] = await db.update(users).set({
      deletedAt: new Date(),
    }).where(eq(users.id, userId)).returning({ id: users.id });

    if (!result) return { ok: false };

    return { ok: true }

    //WARN: com isso era só criar um worker que a cada 30 dias +/- checasse se
    //essa glr continua com o deletedAt
  }

}
