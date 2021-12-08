import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VersionOneModule } from './version-one/version-one.module';
import { VersionTwoModule } from './version-two/version-two.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
// import { IvyCarouselModule } from 'angular-responsive-carousel';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VersionOneModule,
    VersionTwoModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    RouterModule,
    HammerModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
