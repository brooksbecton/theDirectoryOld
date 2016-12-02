import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../projects.service'
import { Project } from '../project'


@Component({
  moduleId: module.id,
  selector: 'project-desc',
  templateUrl: 'project-desc.component.html'
})

export class ProjectDescComponent {

  projects: Project[];
  currentProject: Object;
  private sub: any;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.currentProject = params['project-name']; 
      this.loadProjects()
    });
  }

  loadProjects() {
    this.projectService.getProjects()
      .subscribe(
      projects => this.projects = projects,
      err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}