import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public personalForm: FormGroup;

  constructor(private router: Router) {
    this.personalForm = this.createForm()
  }

  ngOnInit() {
  }

  public next() {
    this.router.navigate(['/', 'setup', 'education'])
  }

  private createForm(): FormGroup {
    return new FormGroup({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      objective: new FormControl(null)
    })
  }

}
