import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VersionOneComponent } from './version-one.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  {path: '', component: VersionOneComponent, children: [
      {path: 'first-page', component: FirstPageComponent},
      {path: 'second-page', component: SecondPageComponent},
      {path: '', redirectTo: '/version-1/first-page', pathMatch: 'full'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VersionOneRoutingModule { }
