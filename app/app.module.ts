import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectNavComponent } from './projects/nav/projects-nav.component'
import { ResourcesComponent } from './resources/resources.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectNavComponent,
    TopNavComponent,
    ResourcesComponent,
    UtilitiesComponent,
    WelcomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
