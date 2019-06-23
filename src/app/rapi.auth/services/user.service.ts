import { Injectable } from "@angular/core";
import { User } from "src/app/rapi.common/models/user";
import { URLRecord } from "src/app/rapi.common/models/urlRecord";
import { BehaviorSubject } from "rxjs";
import { CV } from "src/app/rapi.common/models/cv";

@Injectable()
export class UserService {

    private user: User;
    private selectedAPI: CV;

    public $apiChanged = new BehaviorSubject<CV>(this.selectedAPI);

    public setUser(user: User) {
        this.user = user;
    }

    public getUser(): User {
        return this.user;
    }

    public setSelectedAPI(api: CV) {
        this.selectedAPI = api;
        this.$apiChanged.next(this.selectedAPI);
    }

    public getSelectedAPI(): CV {
        return this.selectedAPI;
    }
}