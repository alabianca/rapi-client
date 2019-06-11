import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { flatMap } from 'rxjs/operators';
import { TokenInfo } from '../models/tokenInfo';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  @ViewChild('email') public emailField: ElementRef;

  constructor(private router: Router, private auth: AuthService) {
    this.registerForm = this.createForm();
  }

  public ngOnInit() {
    const element: HTMLInputElement = this.emailField.nativeElement;
    element.focus();
  }

  public register($event) {
    const email = this.registerForm.controls.email.value;
    const password = this.registerForm.controls.password.value;
    const verify = this.registerForm.controls.verify.value;

    this.auth.register(email, password, verify)
      .pipe(
        flatMap((res: User) => this.auth.authenticate(res.email, password)),
        flatMap((res: TokenInfo) => this.auth.login(res.userId))
      )
      .subscribe(
        (res) => {
          this.router.navigate(['/', 'home']);
        },
        (err) => console.log(err),
      );

  }

  private createForm(): FormGroup {
    return new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      verify: new FormControl(null, [Validators.required]),
    });
  }

}

