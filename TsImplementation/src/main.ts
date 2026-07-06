import { GT, CSK, Team } from './Team.js'; 
import { PlayerSkill, BaseAction } from './PlayerActions.js';
import {SupportedLanguage, EnglishCommentary, HindiCommentary, GujaratiCommentary, Commentary} from './Commentry.js';
import { PlayerType } from './Player.js';
import fs from 'fs';

class MatchSimulation {
    private teamA : Team
    private teamB : Team
    private scoreA : number = 0
    private scoreB : number = 0
    private commentary : Commentary
    
    constructor(teamA : Team, teamB : Team, commentaryEngine : Commentary) {
        this.teamA = teamA;
        this.teamB = teamB;
        this.commentary = commentaryEngine;
    }

    getRandomPlayer(team: Team, bais : number): Player {
        const players: Player[] = team.getTeam().players;
        const attackingPower = team.getTeamStat().ATTACKING_POWER;

        
        const strikerWeight = 1 + Math.floor(attackingPower * bais); 

        const weightedPlayers: Player[] = [];

        for (const player of players) {
            if (player.getInfo().type === PlayerType.STRIKER) {
                // Strikers get duplicated based on the team's attacking power
                for (let i = 0; i < strikerWeight; i++) {
                    weightedPlayers.push(player);
                }
            } else {
                // All other players retain a baseline weight of 1
                weightedPlayers.push(player);
            }
        }

        // Select a random player from the dynamically scaled pool
        return weightedPlayers[Math.floor(Math.random() * weightedPlayers.length)];
    }

    getScoreString() {
        return `[${this.teamA.getTeam().teamName} ${this.scoreA} - ${this.scoreB} ${this.teamB.getTeam().teamName}]`;
    }

    start() {
        const nameA : string = this.teamA.getTeam().teamName;
        const nameB : string = this.teamB.getTeam().teamName;
        
        const game_config : { goal_chances : number , saving_chances : number, bais : number } = JSON.parse(fs.readFileSync('./src/appconfig.json', 'utf-8'))

        this.commentary.printStart(nameA, nameB);

        let minute : number = 0;
        
        const matchInterval = setInterval(() => {
            minute += Math.floor(Math.random() * 10) + 1; 
            
            if (minute >= 180) {
                clearInterval(matchInterval);
                this.endMatch();
                return;
            }

            const totalAttackPower = this.teamA.getTeamStat().ATTACKING_POWER + this.teamB.getTeamStat().ATTACKING_POWER;
            // The probability threshold is determined by Team A's share of the total attack power
            const teamAAttackProbability = this.teamA.getTeamStat().ATTACKING_POWER / totalAttackPower;

        
            const attackingTeam : Team = Math.random() < teamAAttackProbability  ? this.teamA : this.teamB;
            const defendingTeam : Team = attackingTeam === this.teamA ? this.teamB : this.teamA;
            
            // get random player
            const player : Player = this.getRandomPlayer(attackingTeam, game_config.bais);
            
            const actions : string[] = []

            for (const element of player.getPlayer().actions) {

                if(element!=BaseAction.CELEBRATE
                     && 
                    element!=BaseAction.RUN){
                    actions.push(element)
                }
            }
            
            const availableActions : string[] =  actions
            // select random action 
            const randomAction : string = availableActions[Math.floor(Math.random() * availableActions.length)];

            this.commentary.printAction(minute, player.getName, player.getInfo().type, randomAction);

            

            if (randomAction === PlayerSkill.SHOOT) {
                const goalie : Player = defendingTeam.getTeam().players.find(p => p.getInfo().type === PlayerType.GOAL_KEEPER) 
                               || this.getRandomPlayer(defendingTeam, game_config.bais);
                
                const defenseFactor = defendingTeam.getTeamStat().SAVING_POWER * game_config.saving_chances;
                const attackFactor = attackingTeam.getTeamStat().ATTACKING_POWER * game_config.goal_chances;
                
                // Calculate the probability that the ball is saved (normalized between 0 and 1)
                const saveProbability = defenseFactor / (defenseFactor + attackFactor);
                
                const isSaved : boolean = Math.random() < saveProbability; 
                
                if (isSaved) {
                    this.commentary.printSave(goalie.getName);
                } else {
                    if (attackingTeam === this.teamA) this.scoreA++;
                    else this.scoreB++;
                    this.commentary.printGoal(player.getName, attackingTeam.getTeam().teamName, this.getScoreString());
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


// Choice for the user to select the commentry language
import readline from 'readline';
import { Player } from './Player.js';
import { log } from 'console';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let comms : Commentary;
console.log("SELECT YOUR MATCH COMMENTARY LANGUAGE:");
console.log("1. English");
console.log("2. Hindi (हिंदी)");
console.log("3. Gujarati (ગુજરાતી)");

rl.question("\nEnter number choice (1-3): ", 
    (inputValue : string) => {
        if(!inputValue || isNaN(parseInt(inputValue.trim())) || parseInt(inputValue.trim()) < 1 || parseInt(inputValue.trim()) > 3){
            console.log("Invalid choice. Please enter a number between 1 and 3.");
            rl.close();
            process.exit(1);
        }
        
        let choice : number = parseInt(inputValue.trim());
        
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