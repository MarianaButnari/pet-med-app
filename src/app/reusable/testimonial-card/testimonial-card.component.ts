import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html'
})
export class TestimonialCardComponent implements OnChanges {
  @Input() user!: User;

  ngOnChanges(changes: SimpleChanges): void {
  }

}
