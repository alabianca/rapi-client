import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDialogComponent } from '../experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-experienc',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experienceForm: FormGroup;

  constructor(private location: Location, private dialogs: MatDialog) {
    this.experienceForm = this.createForm()
  }

  ngOnInit() {
  }

  public add() {
    this.dialogs.open(ExperienceDialogComponent, {
      width: '1000px'
    })
  }

  public previous() {
    this.location.back()
  }

  private createForm(): FormGroup {
    return new FormGroup({})
  }

}
