import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { DxButtonModule, DxFormModule } from 'devextreme-angular';



@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        DxButtonModule,
        DxFormModule
    ],
    exports: [
        ContactComponent
    ]
})
export class ContactModule { }
