import {MedicalInstitution} from "./medical-institution.model";
export class MedicalProfessional {
  firstName: string;
  lastName: string;
  email: string;
  institution: MedicalInstitution;
  medSpecialty: string;

  constructor(medicalProfessional: Partial<MedicalProfessional>) {
    Object.assign(this, medicalProfessional);
  }
}
