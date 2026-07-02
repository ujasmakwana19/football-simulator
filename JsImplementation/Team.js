import { Defender, GoalKeeper, MidFielder, Striker } from "./Player/Player.js"

class Team {
     
    constructor(teamName, players){
        this._teamName = teamName,
        this._players = players
    }

    getTeam(){
        return {
            teamName : this._teamName,
            players : this._players
        }
    }

   
}

let GT = new Team("Gujarat Titans",
    [
        new Striker("Raju"),
        new Striker("Shayam"),
        new GoalKeeper("Krish"),
        new MidFielder("Ram"),
        new MidFielder("Ramesh"),
        new MidFielder("Suresh"),
        new MidFielder("Mahesh"),
        new MidFielder("Kamlesh"),
        new Defender("Dharmesh"),
        new Defender("Rajesh"),
        new Defender("Dhaval"),
        new Defender("Viral"),
    ]
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
        new Defender("Dharmesh2"),
        new Defender("Rajesh2"),
        new Defender("Dhaval2"),
        new Defender("Viral2"),
    ]
)

export {GT, CSK, Team}
