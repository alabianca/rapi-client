import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educationForm: FormGroup;
  constructor(private location: Location) {
    this.educationForm = this.createForm()
  }

  ngOnInit() {
  }

  public previous() {
    this.location.back()
  }

  private createForm(): FormGroup {
    return new FormGroup({
      school: new FormControl(null),
      degree: new FormControl(null),
    })
  }

}
