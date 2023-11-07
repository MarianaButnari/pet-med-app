import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding d-flex justify-content-center">
      <a [routerLink]="['/dashboard']">
        <img
          src="../../../assets/favicon_io/heart.svg"
          class="align-middle m-2"
          alt="logo"
          [ngStyle]="{width: '90px', height: '100px'}"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
