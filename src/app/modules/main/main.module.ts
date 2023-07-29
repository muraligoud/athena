import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { DxButtonModule, DxTabsModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DxTabsModule,
    DxButtonModule
  ]
})
export class MainModule { }
