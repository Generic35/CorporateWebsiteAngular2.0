import { RecentWork } from '../models/RecentWork'
import { Component } from 'angular2/core';
import { RestDataService } from '../services/RestData'

@Component({
    selector : "recent-works",
    templateUrl : "js/recentWork/recentWork-list.component.html",
    providers : [ RestDataService ]
})
export class RecentWorkListComponent { 
    recentWorks: RecentWork[];
    
    constructor(private _restDataService: RestDataService){}
    
    ngOnInit(){
        this.getRecentWorks();
    }
    
    getRecentWorks(){
        this._restDataService.getRecentWorks()
            .subscribe(response => this.recentWorks = response) 
    }    
    
}