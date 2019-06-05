import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CVService } from 'src/app/rapi.common/services/cv.service';
import { Education } from 'src/app/rapi.common/models/cv';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educationForm: FormGroup;

  constructor(private location: Location, private router: Router, private cv: CVService) {
    this.educationForm = this.createForm()
  }

  ngOnInit() {
  }

  public previous() {
    this.location.back()
  }

  public next() {
    this.persist()
    this.router.navigate(['/', 'setup', 'experience'])
  }

  private createForm(): FormGroup {
    return new FormGroup({
      school: new FormControl(null),
      degree: new FormControl(null),
      startDate: new FormControl(null),
      endDate: new FormControl(null),
      gpa: new FormControl(0.0, [Validators.pattern('[0-9]*\.[0-9]*')])
    })
  }

  private persist() {
    const education: Education = {
      school: this.educationForm.controls.school.value,
      degree: this.educationForm.controls.degree.value,
      fromDate: this.educationForm.controls.startDate.value,
      toDate: this.educationForm.controls.endDate.value,
      gpa: this.educationForm.controls.gpa.value,
    }

    this.cv.setEducation(education);
  }

}
