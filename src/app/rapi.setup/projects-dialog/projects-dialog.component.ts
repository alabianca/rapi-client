import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project, DEFAULT_PROJECT } from 'src/app/rapi.common/models/project';

@Component({
  selector: 'app-projects-dialog',
  templateUrl: './projects-dialog.component.html',
  styleUrls: ['./projects-dialog.component.css']
})
export class ProjectsDialogComponent implements OnInit {
  public projectForm: FormGroup;
  public project: Project;

  constructor(public dialogRef: MatDialogRef<ProjectsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Project) {
    this.project = this.setupDefaults(data);
    this.projectForm = this.createForm();
  }

  ngOnInit() {
  }

  public save() {
    const proj: Project =  {
      title: this.projectForm.controls.title.value,
      detail: this.projectForm.controls.detail.value,
    }

    this.dialogRef.close(proj);
  }

  private setupDefaults(data: Project): Project {
    return {
      ...DEFAULT_PROJECT,
      ...data,
    }
  }

  private createForm(): FormGroup {
    return new FormGroup({
      title: new FormControl(this.project.title, [Validators.required]),
      detail: new FormControl(this.project.detail, [Validators.required])
    })
  }

}
