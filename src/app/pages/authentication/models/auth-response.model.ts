const DEFAULT_VALUES = {
  idToken: null,
  email: null,
  refreshToken: null,
  expiresIn: null,
  localId: null,
  registered: null,
}

export class AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

  constructor(authResponse: object = DEFAULT_VALUES) {
    Object.assign(this, authResponse)
  }
}
