import {AddressModel} from "./address.model";
import {Role} from "./role.model";
import {UserProfile} from "./user-profile.model";

const DEFAULT_VALUES = {
  email: null,
  password: null,
  userProfile: null,
  address: null,
  roles: [],
  idToken: null,
  expiresIn: null,
}


export class User {
  email: string;
  password: string;
  userProfile: UserProfile;
  address: AddressModel;
  roles: Role[];
  idToken?: string;
  expiresIn: Date;

  constructor(user: object = DEFAULT_VALUES) {
    Object.assign(this, user)
  }

}
