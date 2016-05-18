import { Component } from 'angular2/core';
import { RestDataService } from '../services/RestData.ts';
import { TeamMemberProfile } from '../models/TeamMemberProfile.ts';

@Component({
    selector: "team-member-profile-list",
    providers: [ RestDataService ],
    templateUrl: "js/teamMemberProfiles/team.member.profile-list.component.html"
})
export class TeamMemberProfileListComponent{
    
    something: string;
    constructor(private _restDataService: RestDataService){}
    
    teamMemberProfiles: TeamMemberProfile[];
    
    ngOnInit(){
        this.getTeamMemberProfiles();
        this.something = "someString";
    }
    
    getTeamMemberProfiles(){
        this._restDataService.getTeamMemberProfiles()
            .subscribe(services => this.teamMemberProfiles = services)
    }
}