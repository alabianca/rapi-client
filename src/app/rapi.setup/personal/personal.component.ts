import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CVService } from 'src/app/rapi.common/services/cv.service';
import { Personal } from 'src/app/rapi.common/models/cv';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public personalForm: FormGroup;
  public personal: Personal;

  constructor(private router: Router, private cv: CVService) {
    this.personal = this.cv.getPersonal();
    this.personalForm = this.createForm();
  }

  ngOnInit() {
  }

  public next() {
    const personal: Personal = {
      firstname: this.personalForm.controls.fname.value,
      lastname: this.personalForm.controls.lname.value,
      objective: this.personalForm.controls.objective.value,
    }
    
    this.cv.setPersonal(personal)
    this.router.navigate(['/', 'home','setup', 'education'])
  }

  private createForm(): FormGroup {
    return new FormGroup({
      fname: new FormControl(this.personal.firstname, [Validators.required]),
      lname: new FormControl(this.personal.lastname, [Validators.required]),
      objective: new FormControl(this.personal.objective)
    })
  }

}
