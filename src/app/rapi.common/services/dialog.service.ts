import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { WarnDialogComponent } from "../warn-dialog/warn-dialog.component";

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
}