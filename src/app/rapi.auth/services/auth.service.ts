import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators"
import { APIResponse } from "src/app/rapi.common/models/apiResponse";
import { Observable } from "rxjs";

export interface TokenInfo {
    exp: any,
    expires: string,
    token: string,
    userId: string,
}

@Injectable()
export class AuthService {

    private tokenInfo: TokenInfo;

    constructor(private http: HttpClient) {}


    public authenticate(email: string, password: string): Observable<TokenInfo> {
        const body = {
            "email": email,
            "password": password
        }

        const url = `${environment.baseUrl}/v1/api/token`;

        return this.http.post(url, body)
            .pipe(
                map((res: APIResponse) => {
                    console.log("Tap;", res)
                    this.setToken(res.data);
                    return res.data;
                })
            )
    }

    public setToken(tokenInfo: TokenInfo) {
        this.tokenInfo = tokenInfo;
        
        localStorage.setItem("token", JSON.stringify(this.tokenInfo))
    }

    public getToken(): TokenInfo {
        const tokenString =  localStorage.getItem('token');

        if (!tokenString) {
            return null;
        }

        return JSON.parse(tokenString);
    }
}