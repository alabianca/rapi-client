import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ExperienceDialogComponent } from '../experience-dialog/experience-dialog.component';
import { Experience } from 'src/app/rapi.common/models/experience';
import { Router } from '@angular/router';
import { CVService } from 'src/app/rapi.common/services/cv.service';

const DEFAULT_CONFIG: MatDialogConfig<Experience> = {
  width: "1000px",
}

@Component({
  selector: 'app-experienc',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experiences: Experience[] = [];

  constructor(
    private location: Location,
    private dialogs: MatDialog,
    private router: Router,
    private cv: CVService,) {

      this.experiences = this.cv.getExperience();
  }

  ngOnInit() {
  }

  public add() {
    const ref = this.openExperienceModal();

    ref.afterClosed().subscribe((data: Experience) => {
      if (data) {
        this.experiences.push(data);
      }
    })
  }

  public edit(exp: Experience, index: number) {
    const ref = this.openExperienceModal(exp);

    ref.afterClosed().subscribe((data: Experience) => {

      if (data) {
        this.experiences[index] = data;
      }
      
    })
  }

  public openExperienceModal(data?: Experience): MatDialogRef<ExperienceDialogComponent> {
    const config = this.getDialogConfig(data);
    return this.dialogs.open(ExperienceDialogComponent, config);
  }

  public previous() {
    this.location.back()
  }

  public next() {
    this.cv.setExperiences(this.experiences)
    this.router.navigate(['/', 'setup', 'projects'])
  }

  private getDialogConfig(data?: Experience): MatDialogConfig<Experience> {
    if (!data) {
      return DEFAULT_CONFIG;
    }

    return {
      data: data,
      ...DEFAULT_CONFIG,
    }
  }

}
