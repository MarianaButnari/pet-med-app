import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDynamicDashboardComponent]',
  standalone: true
})
export class DynamicDashboardComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
