import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { flatMap } from 'rxjs/operators';
import { TokenInfo } from '../../rapi.common/models/tokenInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  @ViewChild('email') public emailField: ElementRef;

  constructor(private router: Router, private auth: AuthService) {
    this.loginForm = this.createForm();
  }

  public ngOnInit() {
    const element: HTMLInputElement = this.emailField.nativeElement;
    element.focus();
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
          this.router.navigate(['/', 'home', 'dashboard']);
        },
        (err) => console.log(err),
      );

  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

}
