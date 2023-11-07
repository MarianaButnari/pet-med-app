import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from '../_theme/layouts/blank/blank.component';
import { FullComponent } from '../_theme/layouts/full/full.component';
import {AppComponent} from "./app.component";
import {LoggedInGuard} from "./shared/guards/logged-in.guard";

const routes: Routes = [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
  // {
  //   path: '',
  //   // component: FullComponent,
  //   component: AppComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: '/dashboard',
  //       pathMatch: 'full',
  //     },
      {
        path: 'dashboard',
        canActivate: [LoggedInGuard],
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
  {
        path: 'doctor',
        canActivate: [LoggedInGuard],
        loadChildren: () =>
          import('./pages/doctor/doctor.module').then((m) => m.DoctorModule),
      },
      // {
      //   path: 'ui-components',
      //   loadChildren: () =>
      //     import('../_theme/pages/ui-components/ui-components.module').then(
      //       (m) => m.UicomponentsModule
      //     ),
      // },
      // {
      //   path: 'extra',
      //   loadChildren: () =>
      //     import('../_theme/pages/extra/extra.module').then((m) => m.ExtraModule),
      // },
  //   ],
  // },
  // {
  //   path: '',
  //   component: BlankComponent,
  //   children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
