// const PlayerType =  {
//     STRIKER : "Striker",
//     GOAL_KEEPER : "Goal Keeper",
//     MID_FIELDER : "Mid Fielder",
//     DEFENDER : "Defender"
// }

// class Player {
    
//     private _playerName : string
//     private _typeOfPlayer : PlayerType

//     constructor(playerName : string, typeOfPlayer : PlayerType){
//         this._playerName = playerName;
//         this._typeOfPlayer = typeOfPlayer;
//     }

//     getInfo() : {name : string, type : PlayerType}{
//         return {name : this._playerName, type : this._typeOfPlayer}
//     }
// }

// class Striker extends Player{
//     constructor(playerName : string){
//         super(playerName, PlayerType.STRIKER)
//     }
// }

// let p : Player = new Striker("Ram");
// console.log("Start");
// console.log(p.getInfo());


// export {PlayerType, Player, Striker};