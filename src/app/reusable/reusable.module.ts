import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "../material.module";
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { CommonCardComponent } from './common-card/common-card.component';



@NgModule({
  declarations: [
    TestimonialCardComponent,
    CommonCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
  ],
  exports: [TestimonialCardComponent,CommonCardComponent]
})
export class ReusableModule { }
