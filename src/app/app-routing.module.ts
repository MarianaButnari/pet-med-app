import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoggedInGuard} from "./shared/guards/logged-in.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./pages/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [LoggedInGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  // {
  //   path: 'doctor',
  //   canActivate: [LoggedInGuard],
  //   loadChildren: () =>
  //     import('./pages/doctor/doctor.module').then((m) => m.DoctorModule),
  // },
  {path: 'doctor', canActivate: [LoggedInGuard], loadComponent: () => import('./pages/doctor/doctor.component').then(m => m.DoctorComponent)},
  {path: 'contact', canActivate: [LoggedInGuard], loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)},
  {path: 'tracker', canActivate: [LoggedInGuard], loadComponent: () => import('./pages/tracker/tracker.component').then(m => m.TrackerComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
