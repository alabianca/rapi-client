import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { APIResponse } from "src/app/rapi.common/models/apiResponse";
import { Observable } from "rxjs";
import { User } from "../../rapi.common/models/user";
import { TokenInfo } from "../../rapi.common/models/tokenInfo";

@Injectable()
export class AuthService {

    private tokenInfo: TokenInfo;
    private baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) {

    }


    public authenticate(email: string, password: string): Observable<TokenInfo> {
        const body = {
            "email": email,
            "password": password
        };

        const url = `${this.baseUrl}/v1/api/token`;

        return this.http.post(url, body)
            .pipe(
                map((res: APIResponse) => {
                    this.setToken(res.data);
                    return res.data;
                })
            );
    }

    public login(userId: string): Observable<User> {

        const url = `${this.baseUrl}/v1/api/user/${userId}`;

        return this.http.get(url).pipe(map((res: APIResponse) => res.data));
    }

    public register(email: string, password: string, verify: string, fname: string, lname: string): Observable<User> {
        const url = `${this.baseUrl}/v1/api/user`;
        const body = {
            email,
            password,
            verify,
            firstName: fname,
            lastName: lname,
        };

        return this.http.post(url, body).pipe((map((res: APIResponse) => res.data)));

    }

    public setToken(tokenInfo: TokenInfo) {
        this.tokenInfo = tokenInfo;
        localStorage.setItem("token", JSON.stringify(this.tokenInfo));
    }

    public getToken(): TokenInfo {
        const tokenString =  localStorage.getItem('token');

        if (!tokenString) {
            return null;
        }

        return JSON.parse(tokenString);
    }

    public getUserId(): string {
        const token = this.getToken();

        return token ? token.userId : null;
    }
}
