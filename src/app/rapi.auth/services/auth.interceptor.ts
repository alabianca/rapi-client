import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {tap} from 'rxjs/operators'
import { MatDialog } from "@angular/material/dialog";
import { ReauthComponent } from "../reauth/reauth.component";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getToken();

        if (!token) {
            return next.handle(req);
        }

        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.authService.getToken().token}`
            },
        });

        return next.handle(req);
    }

}

@Injectable()
export class JWTExpiredTokenInterceptor implements HttpInterceptor {
    private expiredText = "Token is expired";

    constructor(private dialog: MatDialog) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                (x: HttpEvent<any>) => {},
                (err) => {
                    if (err instanceof HttpErrorResponse && this.isExpiredToken(err)) {
                        this.createReAuthDialog();
                    }
                }
            )
        )
    }

    private isExpiredToken(err: HttpErrorResponse): boolean {
        if (err.status === 401 && err.error.message === this.expiredText) {
            return true
        }

        return false
    }

    private createReAuthDialog() {
        this.dialog.open(ReauthComponent, {
            autoFocus: false,
        });
    }
}
