import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UtilitiesComponent } from './utilities/utilities.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TopNavComponent,
    UtilitiesComponent,
    WelcomeComponent,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
