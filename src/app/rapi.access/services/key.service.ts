import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { APIKey } from "../models/apiKey";
import { APIResponse } from "src/app/rapi.common/models/apiResponse";
import { map } from "rxjs/operators";
import { UserService } from "src/app/rapi.auth/services/user.service";

@Injectable()
export class KeyService {

    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private usersService: UserService) {}

    public getKeys(): Observable<APIKey[]> {
        const selectedAPI = this.usersService.getSelectedAPI();

        if (!selectedAPI) {
            return new Observable<APIKey[]>((ob) => {
                ob.next([]);
                ob.complete();
            })
        }

        const id = selectedAPI.id;
        const url = `${this.baseUrl}/v1/api/key/${id}`
        return this.http.get(url)
            .pipe(
                map((res: APIResponse) => res.data),
            )
    }

    public createKey(key: APIKey): Observable<APIKey> {

        const selectedAPI = this.usersService.getSelectedAPI();

        if (!selectedAPI) {
            return new Observable<APIKey>((ob) => {
                ob.error(new Error("Not Selected API"))
                ob.complete();
            })
        }
        const id = selectedAPI.id;
        const url = `${this.baseUrl}/v1/api/key/${id}`

        return this.http.post(url, key)
            .pipe(
                map((res: APIResponse) => res.data)
            )
    }

    public updateKey(key: APIKey): Observable<APIKey> {
        const selectedAPI = this.usersService.getSelectedAPI();

        if (!selectedAPI) {
            return new Observable<APIKey>((ob) => {
                ob.error(new Error("Not Selected API"))
                ob.complete();
            })
        }

        const id = selectedAPI.id;
        const url = `${this.baseUrl}/v1/api/key/${id}`;
        return this.http.patch(url, key)
            .pipe(
                map((res: APIResponse) => res.data),
            )
    }

    public deleteKey(key: APIKey): Observable<any> {
        const id = key.id;
        const url = `${this.baseUrl}/v1/api/key/${id}`;

        return this.http.delete(url)
            .pipe(
                map((res: APIResponse) => res.data),
            )
    }
}