import { Component } from "angular2/core";
import { RestDataService } from '../services/RestData'
import { Location } from '../models/Location'

@Component({
    selector: "location-list",
    templateUrl: "js/contact/location-list.component.html",
    providers : [ RestDataService ]
})
export class LocationListComponent {
     locations: Location[];
     something: string;
    
    constructor(private _restDataService: RestDataService){
       
    }
    
    ngOnInit(){
        this.getLocations();
    }
    
    getLocations(){
        this._restDataService.getLocations()
            .subscribe(response => this.locations = response) 
    }    
}