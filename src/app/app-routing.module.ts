import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'version-1',loadChildren: () => import('./version-one/version-one.module').then(m => m.VersionOneModule)},
  {path: "version-2", loadChildren: () => import('./version-two/version-two.module').then(m => m.VersionTwoModule)},
  {path: '', redirectTo: '/version-1', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
