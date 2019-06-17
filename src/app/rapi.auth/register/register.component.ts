import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { flatMap } from 'rxjs/operators';
import { TokenInfo } from '../../rapi.common/models/tokenInfo';
import { User } from '../../rapi.common/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  @ViewChild('email') public emailField: ElementRef;

  constructor(private router: Router, private auth: AuthService, private userService: UserService) {
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
    const fname = this.registerForm.controls.firstName.value;
    const lname = this.registerForm.controls.lastName.value;

    this.auth.register(email, password, verify, fname, lname)
      .pipe(
        flatMap((res: User) => this.auth.authenticate(res.email, password)),
        flatMap((res: TokenInfo) => this.auth.login(res.userId))
      )
      .subscribe(
        (res) => {
          this.userService.setUser(res);
          this.navigateToDashboard(res);
        },
        (err) => console.log(err),
      );

  }

  private createForm(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      verify: new FormControl(null, [Validators.required]),
    });
  }

  private navigateToDashboard(user: User) {
    if (user.records && user.records.length > 0) {
      this.router.navigate(['/', 'home', 'dashboard'])
    } else {
      this.router.navigate(['/', 'home', 'setup'])
    }
  }

}

