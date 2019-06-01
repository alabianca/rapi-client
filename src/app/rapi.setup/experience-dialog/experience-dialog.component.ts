import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-experience-dialog',
  templateUrl: './experience-dialog.component.html',
  styleUrls: ['./experience-dialog.component.css']
})
export class ExperienceDialogComponent implements OnInit {
  public experienceForm: FormGroup
  public currentCompany = false;
  public accomplishments = []

  constructor() {
    this.experienceForm = this.createForm()
  }

  ngOnInit() {
  }

  public onToggle($event) {
    this.currentCompany = $event;
  }

  private createForm(): FormGroup {
    return new FormGroup({
      company: new FormControl(null),
      title: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    })
  }

}
