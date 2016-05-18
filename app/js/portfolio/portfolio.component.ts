import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { RecentWorkListComponent } from "../recentWork/recentWork-list.component.ts"

@Component({
    selector: "portfolio-component",
    templateUrl: "js/portfolio/portfolio.component.html",
    directives: [ RecentWorkListComponent ],
    providers: [ HTTP_PROVIDERS ]
})
export class PortfolioComponent {}