import {Address} from "./address.model";
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
  address: Address;
  roles: Role[];
  idToken: string;
  expiresIn: Date;

  constructor(user: object = DEFAULT_VALUES) {
    Object.assign(this, user)
    // @ts-ignore
    if(user && user['userProfile']) {
      // @ts-ignore
      this.userProfile = new UserProfile(user['userProfile']);
    }
    // @ts-ignore
    if(user && user['address']) {
      // @ts-ignore
      this.address = new Address(user['address']);
    }
    // @ts-ignore
    if (user && user[`roles`]) {
      // @ts-ignore
      this.roles = user[`roles`].map((role: Role) => new Role(role));
    }
  }

}
