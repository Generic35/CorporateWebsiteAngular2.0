import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { ServiceListComponent } from "../ourServices/service-list.component.ts"
import { ClientCommentListComponent } from "../ourServices/clientComment-list.component"

@Component({
    selector: "home-component",
    templateUrl: "js/ourServices/ourServices.component.html",
    directives: [ ServiceListComponent, ClientCommentListComponent ],
    providers: [ HTTP_PROVIDERS ]
})
export class OurServicesComponent {}