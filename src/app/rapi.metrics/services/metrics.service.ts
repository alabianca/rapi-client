import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Log } from "../models/log";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { APIResponse } from "src/app/rapi.common/models/apiResponse";

@Injectable()
export class MetricsService {
    private baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}


    getLogEventsFor(keyIds: string[]): Observable<Log[]> {
        const queryArg = keyIds.join(',');
        const query = `keys=${queryArg}`;
        const url = `${this.baseUrl}/v1/api/metrics/?${query}`;

        return this.http.get(url)
            .pipe(
                map((res: APIResponse) => res.data)
            )
    }
}