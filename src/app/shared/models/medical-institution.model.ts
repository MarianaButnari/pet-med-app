import {Address} from "./address.model";

export class MedicalInstitution {
  institutionName: string;
  address: Address;

  constructor(medicalInstitution: Partial<MedicalInstitution>) {
    Object.assign(this, medicalInstitution);
  }
}
