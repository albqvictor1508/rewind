import { randomBytes } from "node:crypto";
import { env } from "src/common/env";


type OAuthProvider = 'google' | 'github';

const {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CALLBACK_URL
} = env;

export class UserService {
  public static genCode() {
    return randomBytes(3).toString('hex').toUpperCase()
  }
  authenticateWithProviderc(provider?: OAuthProvider) {
    const params = new URLSearchParams();

    params.append('response_type', 'code');
    params.append('client_id', AUTH0_CLIENT_ID);
    params.append('redirect_uri', AUTH0_CALLBACK_URL);
    params.append('scope', 'openid profile email');

    if (provider) {
      const connection = provider === 'google' ? 'google-oauth2' : 'github';
      params.append('connection', connection);
    }

    return `https://${AUTH0_DOMAIN}/authorize?${params.toString()}`;
  }

}
