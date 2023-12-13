import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {ReusableModule} from "../../reusable/reusable.module";
import {MaterialModule} from "../../material.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MedicalProfessional} from "../../shared/models/medical-professional.model";

interface month {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule,
    ReusableModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  medicalProfessionalForm: FormGroup;
  months: month[] = [
    { value: 'mar', viewValue: 'March 2023' },
    { value: 'apr', viewValue: 'April 2023' },
    { value: 'june', viewValue: 'June 2023' },
  ];
  ngOnInit(): void {
    this.initForm();
  }

  submitForm() {
    const newMed = new MedicalProfessional(this.medicalProfessionalForm.value)
    console.error(this.medicalProfessionalForm.value);
    console.error(newMed);
  }
  private initForm() {
    this.medicalProfessionalForm = new FormGroup( {
      firstName: new FormControl<string>('', Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      email: new FormControl<string>('', Validators.required),
      institution: new FormGroup({
        institutionName: new FormControl<string>('', Validators.required),
      }),
      medSpecialty: new FormControl<string>('', Validators.required),
    })
  }
}
