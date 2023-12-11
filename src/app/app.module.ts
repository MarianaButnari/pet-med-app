import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

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
import {ErrorInterceptor} from "./shared/interceptors/error.interceptor";
import {HotToastModule} from "@ngneat/hot-toast";
import {ContentTypeInterceptor} from "./shared/interceptors/content-type.interceptor";

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeAr);
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule,
    LayoutsModule,
    NgbModule,
  ],
  exports: [TablerIconsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentTypeInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
