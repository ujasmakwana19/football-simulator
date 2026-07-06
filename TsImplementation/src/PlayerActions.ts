const enum BaseAction {
    PASS = "Pass",
    RUN = "Run",
    CELEBRATE = "Celebrate",
}

const PlayerSkill : Record<string, string> = {
    TACKLE : "Tackling",
    SHOOT : "Shooting",
    SAVE : "Saving",
    LONG_PASS : "Long Pass"
}


class PlayerAction {
    private _actions : string[]
    constructor(playerActions : string[]){
        let actions : string[]  = [
            BaseAction.RUN, 
            BaseAction.PASS, 
            BaseAction.CELEBRATE
        ]

        this._actions = actions.concat(playerActions) 
    }

    get getActions(){
        return this._actions
    }
}

class StrikerAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkill.SHOOT,
                PlayerSkill.LONG_PASS
            ]
        )
    }
}

class MidFilederAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkill.TACKLE,
                PlayerSkill.LONG_PASS
            ]
        )
    }
}

class DefenderAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkill.TACKLE,
                PlayerSkill.LONG_PASS
            ]
        )
    }
}

class GoalKeeperAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkill.LONG_PASS,
                PlayerSkill.SAVE_GOAL
            ]
        )
    }
}

export {
    BaseAction, 
    PlayerSkill , 
    PlayerAction, 
    StrikerAction, 
    MidFilederAction, 
    GoalKeeperAction, 
    DefenderAction
}
