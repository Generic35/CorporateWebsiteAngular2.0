import { OurService } from '../models/OurService'
import { Component } from "angular2/core";
import { DummyDataService } from "../services/DummyData.ts"
import { RestDataService } from "../services/RestData.ts"

@Component({
    selector: "service-list",
    templateUrl: "js/ourServices/service-list.component.html",
    providers: [ RestDataService ]
})
export class ServiceListComponent {
    constructor(private _restDataService: RestDataService){}
    
    ourServices: OurService[];
    
    ngOnInit() { this.getOurServices() }
   
    private getOurServices(){
        this._restDataService.getOurServices()
            .subscribe(services => this.ourServices = services);
    }
}