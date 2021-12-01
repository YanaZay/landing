import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MaterialModule } from '../material.module';
import { VersionOneComponent } from './version-one.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    VersionOneComponent
  ],
  exports: [
    FirstPageComponent,
    VersionOneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class VersionOneModule { }
