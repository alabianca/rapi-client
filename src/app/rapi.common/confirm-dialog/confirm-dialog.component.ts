import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmModalData {
  title: string,
  message: string,
  yesMessage: string,
  noMessage: string,
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  public title: string;
  public message: string;
  public yes: string;
  public no: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmModalData, public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    this.title = data.title || "Title";
    this.message = data.message || "Some Message";
    this.yes = data.yesMessage || "Yes";
    this.no = data.noMessage || "No";
  }

  ngOnInit() {
  }

  public yesClick() {
    this.dialogRef.close(true);
  }

  public noClick() {
    this.dialogRef.close(false);
  }

}
