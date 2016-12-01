import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDescComponent } from './projects/project-desc/project-desc.component';
import { ResourcesComponent } from './resources/resources.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'index',  component: WelcomeComponent },
  { path: 'welcome',  component: WelcomeComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'projects/:project-name',  component: ProjectDescComponent },
  { path: 'resources',  component: ResourcesComponent },
  { path: 'utilities',  component: UtilitiesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
