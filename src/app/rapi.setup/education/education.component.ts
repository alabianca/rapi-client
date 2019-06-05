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
  public education: Education;

  constructor(private location: Location, private router: Router, private cv: CVService) {
    this.education = this.cv.getEducation();
    this.educationForm = this.createForm();
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
      school: new FormControl(this.education.school),
      degree: new FormControl(this.education.degree),
      startDate: new FormControl(this.education.fromDate),
      endDate: new FormControl(this.education.toDate),
      gpa: new FormControl(this.education.gpa, [Validators.pattern('[0-9]*\.[0-9]*')])
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
