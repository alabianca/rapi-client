import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Project } from 'src/app/rapi.common/models/project';
import { ProjectsDialogComponent } from '../projects-dialog/projects-dialog.component';
import { Router } from '@angular/router';
import { CVService } from 'src/app/rapi.common/services/cv.service';

const DEFAULT_CONFIG: MatDialogConfig<Project> = {
  width: "1000px",
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private location: Location, private dialogs: MatDialog, private router: Router, private cv: CVService) {

  }

  ngOnInit() {
  }

  public add() {
    const ref = this.openProjectModal();

    ref.afterClosed().subscribe((data: Project) => {
      if (data) {
        this.projects.push(data);
      }
    })
  }

  public edit(proj: Project, index: number) {
    const ref = this.openProjectModal(proj);

    ref.afterClosed().subscribe((data: Project) => {

      if (data) {
        this.projects[index] = data;
      }
      
    })
  }

  public openProjectModal(data?: Project): MatDialogRef<ProjectsDialogComponent> {
    const config = this.getDialogConfig(data);
    return this.dialogs.open(ProjectsDialogComponent, config);
  }

  public previous() {
    this.location.back()
  }

  public next() {
    this.cv.setProjects(this.projects)
    this.router.navigate(['/', 'setup', 'skills'])
  }

  private getDialogConfig(data?: Project): MatDialogConfig<Project> {
    if (!data) {
      return DEFAULT_CONFIG;
    }

    return {
      data: data,
      ...DEFAULT_CONFIG,
    }
  }

}
