import {AddressModel} from "./address.model";
import {Role} from "./role.model";
import {UserProfile} from "./user-profile.model";

export class User {
  userName: string;
  password: string;
  userProfile: UserProfile;
  address: AddressModel;
  roles: Role[];
}
