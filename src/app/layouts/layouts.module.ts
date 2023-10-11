import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconsModule } from "angular-tabler-icons";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavItemComponent } from './sidebar/nav-item/nav-item.component';
import { BrandingComponent } from "./sidebar/branding.component";
import {RouterLink} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    SidebarComponent,
    NavItemComponent,
    BrandingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    TablerIconsModule,
    RouterLink,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class LayoutsModule { }
