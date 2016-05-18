import { OurService } from '../models/OurService';
import { RecentWork } from '../models/RecentWork';
import { TeamMemberProfile } from '../models/TeamMemberProfile';
import { ClientComment } from '../models/ClientComment';
import { Location } from '../models/Location';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class RestDataService {
    constructor(private _http: Http){}
    
    getOurServices(){
        var observable =  this._http.get('/data/services');

        return observable.map((response: Response) => <OurService[]>response.json())
            .catch((error: Response) => 'Error getting ourServices: ' + console.log(error));
    }
    
    getRecentWorks(){
        var observable = this._http.get('/data/recentWorks')
       
        return observable.map((response: Response) => <RecentWork[]>response.json())
            .catch((error: Response) => 'Error getting recent work: ' + console.log(error));
    }
    
    getTeamMemberProfiles(){
        var observable = this._http.get('/data/teamMemberProfiles')
        
        return observable.map((response: Response) => <TeamMemberProfile[]>response.json())
            .catch((error: Response) => 'error getting team member profiles' + console.log(error));
    }
    getClientComments(){
        var observable = this._http.get('/data/clientComments')
        
        return observable.map((response: Response) => <ClientComment[]>response.json())
            .catch((error: Response) => 'error getting client comments' + console.log(error));
    }
    getLocations(){
        var observable = this._http.get('/data/locations')
        
        return observable.map((response: Response) => <Location[]>response.json())
            .catch((error: Response) => 'error getting locations' + console.log(error));
    }
}