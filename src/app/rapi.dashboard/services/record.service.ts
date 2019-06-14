import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "src/app/rapi.auth/services/auth.service";
import { environment } from "src/environments/environment";
import { URLRecord } from "src/app/rapi.common/models/urlRecord";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {APIResponse} from 'src/app/rapi.common/models/apiResponse'

@Injectable()
export class RecordService {
    private baseUrl = environment.baseUrl;


    constructor(private http: HttpClient, private authService: AuthService) {}

    public getRecords(): Observable<URLRecord[]> {
        const userId = this.authService.getUserId()

        if (!userId) {
            return new Observable((obs) => {
                obs.error("No User ID");
                obs.complete();
            })
        }

        return this.getRecordsFor(userId);
    }

    private getRecordsFor(userId: string): Observable<URLRecord[]> {
        const url = `${this.baseUrl}/v1/api/user/${userId}/records`

        return this.http.get(url)
                .pipe(
                    map((res: APIResponse) => res.data)
                )
    }


}