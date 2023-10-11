const DEFAULT_VALUES = {
  email: null,
  password: null,
  returnSecureToken: true
}

export class UserAuth {
  email: string;
  password: string;
  returnSecureToken: boolean;

  constructor(userAuth: object = DEFAULT_VALUES) {
    Object.assign(this, userAuth)
  }
}
