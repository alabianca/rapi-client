import { Injectable } from "@angular/core";
import { User } from "src/app/rapi.common/models/user";
import { URLRecord } from "src/app/rapi.common/models/urlRecord";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class UserService {

    private user: User;
    private selectedAPI: URLRecord;

    public $apiChanged = new BehaviorSubject<URLRecord>(this.selectedAPI);

    public setUser(user: User) {
        this.user = user;
    }

    public getUser(): User {
        return this.user;
    }

    public setSelectedAPI(api: URLRecord) {
        this.selectedAPI = api;
        this.$apiChanged.next(this.selectedAPI);
    }

    public getSelectedAPI(): URLRecord {
        return this.selectedAPI;
    }
}