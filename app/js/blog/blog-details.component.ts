import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"

@Component({
    selector: "blog-details-component",
    templateUrl: "js/blog/blog-details.component.html",
    providers: [ HTTP_PROVIDERS ]
})
export class BlogDetailsComponent {}