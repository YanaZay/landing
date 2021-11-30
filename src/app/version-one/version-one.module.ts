import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionOneComponent } from './version-one.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    VersionOneComponent
  ],
  exports: [
    VersionOneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class VersionOneModule { }
