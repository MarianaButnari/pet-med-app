import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "../material.module";
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';



@NgModule({
  declarations: [
    TestimonialCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
  ],
  exports: [TestimonialCardComponent]
})
export class ReusableModule { }
