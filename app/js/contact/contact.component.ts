import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { RestDataService } from '../services/RestData'
import { LocationListComponent } from "./location-list.component"

@Component({
    selector: "contact-component",
    templateUrl: "js/contact/contact.component.html",
    directives: [ LocationListComponent ],
    providers: [ HTTP_PROVIDERS, RestDataService ]
})
export class ContactComponent {}