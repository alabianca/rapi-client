import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reauth',
  templateUrl: './reauth.component.html',
  styleUrls: ['./reauth.component.css']
})
export class ReauthComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReauthComponent>, private router: Router) { }

  ngOnInit() {
    this.dialogRef.beforeClose()
      .subscribe(() => {
        this.router.navigate(['/', 'auth'])
      })
  }

  public reauth() {
    this.dialogRef.close();
  }

}
