import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'application', component: AppComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/main/main.module').then(mod => mod.MainModule) },
      //{ path: '', loadChildren: () => import('./modules/main/main.module').then(mod => mod.MainModule), canLoad: [AuthGuard] },
      { path: 'login', loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule) },

      { path: '**', redirectTo: '/application/login', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/application/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
