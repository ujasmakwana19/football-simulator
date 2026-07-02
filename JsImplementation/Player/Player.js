import { PlayerAction, StrikerAction, MidFilederAction, GoalKeeperAction, DefenderAction } from "./PlayerActions.js";

class Player {
    constructor(name , type, actions){
        this._name = name;
        this._role = type;
        this._playerActions = actions
    }
    getPlayer(){
        return {name : this._name , type : this._role, actions : this._playerActions}
    }
}

const PlayerRole = {
    STRIKER : "Striker",
    GOAL_KEEPER : "Goal Keeper",
    MID_FIELDER : "Mid Fielder",
    DEFENDER : "Defender"
}

class Striker extends Player{
    constructor(name){
        super(name , PlayerRole.STRIKER, new StrikerAction().get())
    }
}

class GoalKeeper extends Player{
    constructor(name){
        super(name , PlayerRole.GOAL_KEEPER, new GoalKeeperAction().get())
    }
}

class Defender extends Player{
    constructor(name){
        super(name , PlayerRole.DEFENDER, new DefenderAction().get())
    }
}

class MidFielder extends Player{
    constructor(name){
        super(name , PlayerRole.MID_FIELDER, new MidFilederAction().get())
    }
}

let p = new MidFielder("Ram");
console.log("Hey my name is:", p.getPlayer());

export {Striker, GoalKeeper, Defender, MidFielder, Player, PlayerRole}


