const DEFAULT_VALUES = {
  id: null,
  firstName: null,
  lastName: null,
  birthDate: null,
  about: null,
  userImg: null,
  blood: null,
  height: null,
  weight: null,

}

export class UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  about: string;
  userImg: string;
  blood: string;
  height: string;
  weight: string

  constructor(userProfile: object = DEFAULT_VALUES) {
    Object.assign(this, userProfile)
  }
}
