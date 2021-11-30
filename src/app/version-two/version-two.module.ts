import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionTwoComponent } from './version-two.component';



@NgModule({
  declarations: [
    VersionTwoComponent
  ],
  exports: [
    VersionTwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VersionTwoModule { }
