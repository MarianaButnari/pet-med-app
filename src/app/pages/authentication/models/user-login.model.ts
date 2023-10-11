const DEFAULT_VALUES = {
  username: null,
  password: null,
}

export class UserLogin {
  username: string;
  password: string;

  constructor(userLogin: object = DEFAULT_VALUES) {
    Object.assign(this, userLogin)
  }
}
