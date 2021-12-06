import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MaterialModule } from '../material.module';
import { VersionOneComponent } from './version-one.component';
import { VersionOneRoutingModule } from './version-one-routing.module';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';


@NgModule({
  declarations: [
    FirstPageComponent,
    VersionOneComponent,
    SecondPageComponent,
    ThirdPageComponent
  ],
  exports: [
    FirstPageComponent,
    VersionOneComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    VersionOneRoutingModule
  ]
})
export class VersionOneModule { }
