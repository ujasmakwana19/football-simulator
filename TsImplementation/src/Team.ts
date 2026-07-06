import { Player, Striker, GoalKeeper, MidFielder, Defenders } from "./Player.js"

type TeamStat = {
    ATTACKING_POWER : number,
    SAVING_POWER : number
}

class Team {
    private _teamName : string
    private _players : Player[] 
    private _teamStat : TeamStat = {
        ATTACKING_POWER : 0.5,
        SAVING_POWER : 0.3
    }
    constructor(teamName : string, players: Player[], teamStat : TeamStat ) {
        this._teamName = teamName,
        this._players = players,
        this._teamStat = teamStat;
    }

    getTeam() : {teamName : string, players : Player[]} {
        return {
            teamName : this._teamName,
            players : this._players
        }
    }

    getTeamStat() : TeamStat {
        return this._teamStat;
    }

   
}

let GT : Team  = new Team("Gujarat Titans",
    [
        new Striker("Raju"),
        new Striker("Shayam"),
        new GoalKeeper("Krish"),
        new MidFielder("Ram"),
        new MidFielder("Ramesh"),
        new MidFielder("Suresh"),
        new MidFielder("Mahesh"),
        new MidFielder("Kamlesh"),
        new Defenders("Dharmesh"),
        new Defenders("Rajesh"),
        new Defenders("Dhaval"),
        new Defenders("Viral"),
    ],
    {
        ATTACKING_POWER : 0.6,
        SAVING_POWER : 0.4
    }
)

let CSK = new Team("Chennai Super Kings",
    [
        new Striker("Raju2"),
        new Striker("Shayam2"),
        new GoalKeeper("Krish2"),
        new MidFielder("Ram2"),
        new MidFielder("Ramesh2"),
        new MidFielder("Suresh2"),
        new MidFielder("Mahesh2"),
        new MidFielder("Kamlesh2"),
        new Defenders("Dharmesh2"),
        new Defenders("Rajesh2"),
        new Defenders("Dhaval2"),
        new Defenders("Viral2"),
    ],
    {
        ATTACKING_POWER : 0.1,
        SAVING_POWER : 0.9
    }
)

export {GT, CSK, Team, TeamStat}
