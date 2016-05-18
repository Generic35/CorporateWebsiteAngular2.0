import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"

@Component({
    selector: "blog-list-component",
    templateUrl: "js/blog/blog-list.component.html",
    providers: [ HTTP_PROVIDERS ]
})
export class BlogListComponent {}