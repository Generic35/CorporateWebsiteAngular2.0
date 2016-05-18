import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { RecentWorkListComponent } from "../recentWork/recentWork-list.component.ts"

@Component({
    selector: "shortCodes-component",
    templateUrl: "js/shortCodes/shortCodes.component.html",
    directives: [ RecentWorkListComponent ],
    providers: [ HTTP_PROVIDERS ]
})
export class ShortCodesComponent {}