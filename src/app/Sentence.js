import { Character} from "./Character"
export class Sentence{
    constructor(sentence, logoWrapper){
        this.sentence = sentence;
        this.logoWrapper = logoWrapper;
        this.character = new Character();
        this.index = 0;
    };

    generateLogo(){
        for(let char of this.sentence){
            const letter  = this.character.render(char);            
            this.logoWrapper.appendChild(letter);
        };
    };

    visualEffect(){
       
        const logoLetterWrapper = document.querySelectorAll(".main-container__logo-letter");
        this.addActiveClass(logoLetterWrapper[this.index].querySelectorAll(".cell"));

        const interval = setInterval(()=>{
            this.index++;
            if(this.index < Array.from(this.sentence).length){
            this.addActiveClass(logoLetterWrapper[this.index].querySelectorAll(".cell"))
            }            
            else{
                clearInterval(interval)
            };
        },200)
    };

    addActiveClass(wrapper){
        let randomNumber = null;
        const randomNubersArray = []; 

        wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
        setInterval(()=>{
            do {randomNumber = Math.floor(Math.random()*wrapper.length)
            } while (randomNubersArray.includes(randomNumber));

            randomNubersArray.push(randomNumber);
            wrapper[randomNumber].classList.add("cell--active");

            setTimeout(()=> {
                wrapper[randomNubersArray[0]].classList.remove("cell--active");
                randomNubersArray.shift();
            },1500) 
        },100)        
    };   
};