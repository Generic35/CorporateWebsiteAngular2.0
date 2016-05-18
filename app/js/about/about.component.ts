import { Component } from "angular2/core";
import { HTTP_PROVIDERS } from "angular2/http"
import { TeamMemberProfileListComponent } from "../teamMemberProfiles/team.member.profile-list.component.ts"

@Component({
    selector: "about-component",
    templateUrl: "js/about/about.component.html",
    directives: [ TeamMemberProfileListComponent ],
    providers: [ HTTP_PROVIDERS ]
})
export class AboutComponent {}