const BaseActions = {
    RUN : "Running",
    PASS : "Passing",
    CELEBRATE : "CELEBRATING"
}

let PlayerSkills = {
    SHOOT : "Shoot",
    TACKLE : "Tackle",
    SAVE_GOAL : "Save Goal",
    LONG_PASS : "Long Pass"
}

class PlayerAction {
    constructor(playerActions){
        let actions = [
            BaseActions.RUN, 
            BaseActions.PASS, 
            BaseActions.CELEBRATE
        ]

        this._actions = actions.concat(playerActions) 
    }

    get(){
        return this._actions
    }
}

class StrikerAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkills.SHOOT,
                PlayerSkills.LONG_PASS
            ]
        )
    }
}

class MidFilederAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkills.TACKLE,
                PlayerSkills.LONG_PASS
            ]
        )
    }
}

class DefenderAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkills.TACKLE,
                PlayerSkills.LONG_PASS
            ]
        )
    }
}

class GoalKeeperAction extends PlayerAction{
    constructor(){
        super(
            [
                PlayerSkills.LONG_PASS,
                PlayerSkills.SAVE_GOAL
            ]
        )
    }
}

// class CreateCustomPlayerAction extends PlayerAction{
//     constructor(playerActions){
//         actions = [];
//         playerActions.forEach(element => {
//             PlayerSkills[element.name] = element.value
//             actions.append(element.value)
//         });
//         super(actions)
//     }
// }

export {BaseActions, PlayerSkills , PlayerAction, StrikerAction, MidFilederAction, GoalKeeperAction, DefenderAction}