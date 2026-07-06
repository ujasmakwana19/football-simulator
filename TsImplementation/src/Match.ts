import { Team } from "./Team.js"

class Match {
    private _teamA : Team
    private _teamB : Team
    private _teamAScore : number 
    private _teamBScore : number 
    private _winner : string 
    constructor(teamA : Team , teamB : Team){
        this._teamA = teamA,
        this._teamB = teamB,
        this._teamAScore = 0, 
        this._teamBScore = 0,
        this._winner = "Match in Progress"
    }
}

export { Match }