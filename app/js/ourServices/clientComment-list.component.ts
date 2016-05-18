import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { RestDataService } from '../services/RestData'
import { ClientComment } from '../models/ClientComment'

@Component({
    selector: "client-comment-list",
    templateUrl: "js/ourServices/clientComment-list.component.html",
    providers : [ HTTP_PROVIDERS, RestDataService ]
})
export class ClientCommentListComponent {
     clientComments: ClientComment[];
    
    constructor(private _restDataService: RestDataService){}
    
    ngOnInit(){
        this.getClientComments();
    }
    
    getClientComments(){
        this._restDataService.getClientComments()
            .subscribe(response => this.clientComments = response) 
    }    
}