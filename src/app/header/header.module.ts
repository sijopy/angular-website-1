import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSecComponent } from './header-sec/header-sec.component';



@NgModule({
  declarations: [
    HeaderSecComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderSecComponent
  ]
})
export class HeaderModule { }
