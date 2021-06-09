
import { Character} from "./Character"

export class Sentence{
    constructor(sentence, logoWrapper){
        this.sentence = sentence;
        this.logoWrapper = logoWrapper;
        this.character = new Character();
    };

    generateLogo(){
        for(let char of this.sentence){
            const letter  = this.character.render(char);            
            this.logoWrapper.appendChild(letter);
        };
    };
};