const DEFAULT_VALUES = {
  email: null,
  password: null,
  returnSecureToken: true
}

export class UserLogin {
  email: string;
  password: string;
  returnSecureToken: boolean;

  constructor(userLogin: object = DEFAULT_VALUES) {
    Object.assign(this, userLogin)
  }
}
