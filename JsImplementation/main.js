import { EnglishCommentary, GujaratiCommentary, HindiCommentary, SupportedLanguage } from './Commentry.js';
import {BaseActions, PlayerSkills } from './Player/PlayerActions.js';
import { GT, CSK } from './Team.js'; 

class MatchSimulation {
    constructor(teamA, teamB, commentaryEngine) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.scoreA = 0;
        this.scoreB = 0;
        this.commentary = commentaryEngine;
    }

    getRandomPlayer(team) {
        const players = team.getTeam().players;
        return players[Math.floor(Math.random() * players.length)];
    }

    getScoreString() {
        return `[${this.teamA.getTeam().teamName} ${this.scoreA} - ${this.scoreB} ${this.teamB.getTeam().teamName}]`;
    }

    start() {
        const nameA = this.teamA.getTeam().teamName;
        const nameB = this.teamB.getTeam().teamName;
        
        this.commentary.printStart(nameA, nameB);

        let minute = 0;
        
        const matchInterval = setInterval(() => {
            minute += Math.floor(Math.random() * 10) + 1; 
            
            if (minute >= 180) {
                clearInterval(matchInterval);
                this.endMatch();
                return;
            }

            const attackingTeam = Math.random() > 0.5 ? this.teamA : this.teamB;
            const defendingTeam = attackingTeam === this.teamA ? this.teamB : this.teamA;
            
            const player = this.getRandomPlayer(attackingTeam);
            
            const actions = []
            for (const element of player.getPlayer().actions) {
                if(element!=BaseActions.CELEBRATE){
                    actions.push(element)
                }
            }
            
            const availableActions =  actions
            const randomAction = availableActions[Math.floor(Math.random() * availableActions.length)];

            this.commentary.printAction(minute, player._name, player._role, randomAction);

            if (randomAction === PlayerSkills.SHOOT) {
                const goalie = defendingTeam.getTeam().players.find(p => p._role === "GoalKeeper") 
                               || this.getRandomPlayer(defendingTeam);

                const isSaved = Math.random() > 0.4; 
                if (isSaved) {
                    this.commentary.printSave(goalie._name);
                } else {
                    if (attackingTeam === this.teamA) this.scoreA++;
                    else this.scoreB++;
                    this.commentary.printGoal(player._name, attackingTeam.getTeam().teamName, this.getScoreString());
                }
            }
            console.log("-----------------------------------------------------------------");
        }, 1500);
    }

    endMatch() {
        const nameA = this.teamA.getTeam().teamName;
        const nameB = this.teamB.getTeam().teamName;
        let winner = "It's a Draw!";

        if (this.scoreA > this.scoreB) winner = nameA;
        else if (this.scoreB > this.scoreA) winner = nameB;

        this.commentary.printEnd(winner, this.getScoreString());
        process.exit(0); 
    }
}

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let comms;
console.log("SELECT YOUR MATCH COMMENTARY LANGUAGE:");
console.log("1. English");
console.log("2. Hindi (हिंदी)");
console.log("3. Gujarati (ગુજરાતી)");

rl.question("\nEnter number choice (1-3): ", 
    (choice) => {
        choice = parseInt(choice.trim());
        switch (choice) {
            case SupportedLanguage.ENGLISH:
                comms = new EnglishCommentary()
                break;

            case SupportedLanguage.GUJARATI:
                comms = new GujaratiCommentary()
                    
                break;
            
            case SupportedLanguage.HINDI:
                comms = new HindiCommentary()
                break;
        
            default:
                break;
        }
        
    rl.close();

    const simulation = new MatchSimulation(GT, CSK, comms);
    simulation.start();
});