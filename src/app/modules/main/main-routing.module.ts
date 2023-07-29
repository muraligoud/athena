
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: "home", loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule) },
      { path: "about", loadChildren: () => import('../about/about.module').then(mod => mod.AboutModule) },
      { path: "services", loadChildren: () => import('../services/services.module').then(mod => mod.ServicesModule) },
      { path: "contact", loadChildren: () => import('../contact/contact.module').then(mod => mod.ContactModule) },
      { path: '**', redirectTo: '/application/home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/application/home', pathMatch: 'full' }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }
