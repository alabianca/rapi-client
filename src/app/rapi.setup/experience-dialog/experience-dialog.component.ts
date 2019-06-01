import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  public experienceForm: FormGroup

  constructor() {
    this.experienceForm = this.createForm()
  }

  ngOnInit() {
  }

  private createForm(): FormGroup {
    return new FormGroup({
      company: new FormControl(null),
      current: new FormControl(true),
    })
  }

}
