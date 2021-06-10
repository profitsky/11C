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

    visualEffect(){
        const logoLetterWrapper = document.querySelectorAll(".main-container__logo-letter")
            Array.from(this.sentence).forEach((cell, index) => {            
            this.addActiveClass(logoLetterWrapper[index].querySelectorAll(".cell"))
        })      
    };

    

    addActiveClass(wrapper){

            wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },200)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },400)

            setTimeout(()=> {
            wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },600)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },800)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1000)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1200)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1400)

            setInterval(() => {
                wrapper.forEach((element) =>{
                    element.classList.remove("cell--active")
                })

                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");

                 setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },200)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },400)

            setTimeout(()=> {
            wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },600)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },800)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1000)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1200)

            setTimeout(()=> {
                wrapper[Math.floor(Math.random()*wrapper.length)].classList.add("cell--active");
            },1400)
                
            }, 2250);
    };
};