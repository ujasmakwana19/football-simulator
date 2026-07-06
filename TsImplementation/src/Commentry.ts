import { EnglishMessage, GujaratiMessage, HindiMessage } from "./CommentryLocaliser.js";

export const SupportedLanguage = {
    ENGLISH: 1,
    HINDI: 2,
    GUJARATI: 3
};

export class Commentary {
    private words : Record<string , string>
    constructor(words : Record<string , string>) {
        this.words = words;
    }

    format(template : string, data : any) {
        let msg : string = template;
        
        for (const key in data) {
            msg = msg.replace(new RegExp(`{${key}}`, 'g'), data[key]);
        }
        return msg;
    }

    printStart(teamA : string, teamB : string) { 
        console.log(this.format(this.words.start, { teamA, teamB })); 
    }

    printAction(time : number, playerName : string, role : string, action : string) { 
        console.log(this.format(this.words.action, { time, playerName, role, action })); 
    }

    printGoal(playerName : string, team:string , score : string) { 
        console.log(this.format(this.words.goal, { playerName, team, score })); 
    }

    printSave(playerName : string) { 
        console.log(this.format(this.words.save, { playerName })); 
    }

    printEnd(winner : string, score : string) {
        console.log(this.format(this.words.end, { winner, score })); 
    }
}

export class EnglishCommentary extends Commentary {
    constructor() {
        super(EnglishMessage);
    }
}

export class HindiCommentary extends Commentary {
    constructor() {
        super(HindiMessage);
    }
}

export class GujaratiCommentary extends Commentary {
    constructor() {
        super(GujaratiMessage);
    }
}