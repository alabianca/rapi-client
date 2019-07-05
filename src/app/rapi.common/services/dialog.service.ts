import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { WarnDialogComponent } from "../warn-dialog/warn-dialog.component";
import { ConfirmModalData, ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { Observable } from "rxjs";

@Injectable()
export class RapiDialogService {
    constructor(private dialog: MatDialog) {}

    public warn(title: string, message: string) {
        this.dialog.open(WarnDialogComponent, {
            data: {
                title,
                message,
            },
            width: "400px",
        })
    }

    public confirm(data: ConfirmModalData): Observable<any> {
        return new Observable((observer) => {
            const ref = this.dialog.open(ConfirmDialogComponent, {
                width: "400px",
                data: data,
                autoFocus: false,
            })

            ref.afterClosed().subscribe((didClickYes) => {
                if (didClickYes) {
                    observer.next("Yes Click")
                    observer.complete();
                } else {
                    observer.error("No Click");
                    observer.complete();
                }
            })
        })
    }
}