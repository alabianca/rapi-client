import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { flatMap } from 'rxjs/operators'
import { TokenInfo } from '../models/tokenInfo';

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
      .pipe(
        flatMap((res: TokenInfo) => {
          return this.auth.login(res.userId);
        })
      )
      .subscribe(
        (res) => {
          console.log("Success Login", res);
          this.router.navigate(['/', 'home'])
        },
        (err) => console.log(err),
      )
    
  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    })
  }

}
