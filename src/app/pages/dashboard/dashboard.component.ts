import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {UserDashboardComponent} from "./user-dashboard/user-dashboard.component";
import {DocDashboardComponent} from "./doc-dashboard/doc-dashboard.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {DynamicDashboardComponentDirective} from "../../shared/directives/dynamic-dashboard-component.directive";
import {LoadDynamicComponentService} from "../../shared/services/load-dynamic-component.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  private loadDynamicComponentService = inject(LoadDynamicComponentService)
  compArray = [UserDashboardComponent, DocDashboardComponent, AdminDashboardComponent]

  @ViewChild(DynamicDashboardComponentDirective, { static: true }) dynamicComponentDirective!: DynamicDashboardComponentDirective;
  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  public loadDynamicComponent() {
    // Get a random component
    const item = this.compArray[Math.floor(Math.random()*this.compArray.length)];

    this.loadDynamicComponentService.load(this.dynamicComponentDirective.viewContainerRef, item);
  }
}
