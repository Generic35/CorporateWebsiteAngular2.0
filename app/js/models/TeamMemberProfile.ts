import { Skill } from "./Skill.ts"
export class TeamMemberProfile{
    constructor(id: number, name: string, role: string, imageUrl: string,
        skills: Skill[], facebookProfileUrl: string, twitterProfileUrl: string, 
        googlePlusProfileUrl: string, description: string){}
}