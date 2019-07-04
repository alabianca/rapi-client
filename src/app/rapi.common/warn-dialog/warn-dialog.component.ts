import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface WarnData {
  title: string,
  message: string,
}

@Component({
  selector: 'app-warn-dialog',
  templateUrl: './warn-dialog.component.html',
  styleUrls: ['./warn-dialog.component.css']
})
export class WarnDialogComponent implements OnInit {
  public title: string = "Title"
  public message: string = "A message for you"

  constructor(@Inject(MAT_DIALOG_DATA) public data: WarnData, public dialogRef: MatDialogRef<WarnDialogComponent>) {
    this.title = data.title || "Title";
    this.message = data.message || "A message for you!"
  }

  ngOnInit() {
  }

  public close() {
    this.dialogRef.close()
  }

}
