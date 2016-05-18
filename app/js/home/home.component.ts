import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { ServiceListComponent } from "../ourServices/service-list.component.ts"
import { RecentWorkListComponent } from "../recentWork/recentWork-list.component.ts"

@Component({
    selector: "home-component",
    templateUrl: "js/home/home.component.html",
    directives: [ ServiceListComponent, RecentWorkListComponent ],
    providers: [ HTTP_PROVIDERS ]
})
export class HomeComponent {}