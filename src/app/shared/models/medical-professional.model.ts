const DEFAULT_VALUES = {
  name: null,
  institution: null,
  medSpecialty: null,
}

export class MedicalProfessional {
  name: string;
  institution: string;
  medSpecialty: string;

  constructor(medicalProfessional: object = DEFAULT_VALUES) {
    Object.assign(this, medicalProfessional);
  }
}
