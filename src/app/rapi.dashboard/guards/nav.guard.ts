import { Injectable } from "@angular/core";
import { UserService } from "src/app/rapi.auth/services/user.service";
import { Router, CanActivate } from "@angular/router";
import { RapiDialogService } from "src/app/rapi.common/services/dialog.service";

@Injectable()
export class NavGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router, private rapiDialogService: RapiDialogService) {}

    public canActivate(): boolean {
        if (!this.userService.getSelectedAPI()) {
            this.rapiDialogService.warn("Select an API", "You must select an api to proceed")
            return false;
        }

        return true;
    }
}
