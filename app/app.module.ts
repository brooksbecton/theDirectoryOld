import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectNavComponent } from './projects/nav/projects-nav.component';
import { ProjectDescComponent } from './projects/project-desc/project-desc.component';
import { ProjectService } from './projects/projects.service';
import { ResourcesComponent } from './resources/resources.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectDescComponent,
    ProjectNavComponent,
    TopNavComponent,
    ResourcesComponent,
    UtilitiesComponent,
    WelcomeComponent,
  ],
  providers: [
    ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
