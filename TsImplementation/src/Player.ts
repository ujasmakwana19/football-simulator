import { StrikerAction, MidFilederAction, DefenderAction, GoalKeeperAction } from "./PlayerActions.js";

const enum PlayerType {
    STRIKER = "Striker",
    GOAL_KEEPER = "Goal Keeper",
    MID_FIELDER = "Mid Fielder",
    DEFENDER = "Defender"
}

class Player {
    
    private _playerName : string
    private _typeOfPlayer : PlayerType
    private _playerActions : string[] 

    constructor(playerName : string, typeOfPlayer : PlayerType, playerActions : string[]) {
        this._playerName = playerName;
        this._typeOfPlayer = typeOfPlayer;
        this._playerActions = playerActions;
    }
    get getName() : string{
        return this._playerName;
    }
    getInfo() : {name : string, type : PlayerType}{
        return {name : this._playerName, type : this._typeOfPlayer}
    }

    getPlayer() : {name : string, type : PlayerType, actions : string[]}{
        return {
            name : this._playerName , 
            type : this._typeOfPlayer, 
            actions : this._playerActions
        }
    }
}

class Striker extends Player{
    constructor(playerName : string){
        super(
            playerName, 
            PlayerType.STRIKER, 
            new StrikerAction().getActions
        )
    }
}

class MidFielder extends Player{
    constructor(playerName : string){
        super(
            playerName, 
            PlayerType.MID_FIELDER, 
            new MidFilederAction().getActions
        )
    }
}
class Defenders extends Player{
    constructor(playerName : string){
        super(
            playerName, 
            PlayerType.DEFENDER, 
            new DefenderAction().getActions
        )
    }
}
class GoalKeeper extends Player{
    constructor(playerName : string){
        super(
            playerName, 
            PlayerType.GOAL_KEEPER, 
            new GoalKeeperAction().getActions
        )
    }
}

export {
    PlayerType, 
    Player, 
    Striker, 
    MidFielder, 
    Defenders, 
    GoalKeeper
};