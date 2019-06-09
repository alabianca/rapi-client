import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private router: Router, private auth: AuthService) {
    this.loginForm = this.createForm();
  }

  public ngOnInit() {
  }

  public login($event) {
    this.auth.authenticate(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe((res) => {
        console.log(res);
      })
    this.router.navigate(['/', 'home'])
  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

}
