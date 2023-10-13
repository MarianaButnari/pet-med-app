import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from '../_theme/layouts/full/full.component';
import { BlankComponent } from '../_theme/layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from '../_theme/layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from '../_theme/layouts/full/header/header.component';
import { BrandingComponent } from '../_theme/layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from '../_theme/layouts/full/sidebar/nav-item/nav-item.component';
import {LayoutsModule} from "./layouts/layouts.module";
import {PagesModule} from "./pages/pages.module";
import {ErrorInterceptor} from "./shared/interceptors/error.interceptor";
import {HotToastModule} from "@ngneat/hot-toast";

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    // BrandingComponent,
    AppNavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TablerIconsModule.pick(TablerIcons),
    HotToastModule.forRoot(),
    MaterialModule,
    LayoutsModule,
  ],
  exports: [TablerIconsModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
