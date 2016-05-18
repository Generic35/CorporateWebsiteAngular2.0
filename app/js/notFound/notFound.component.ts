import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"

@Component({
    selector: "notFound-component",
    templateUrl: "js/notFound/notFound.component.html",
    providers: [ HTTP_PROVIDERS ]
})
export class NotFoundComponent {}