import "../src/sass/main.scss";
import { Sentence } from "./app/Sentence"

class App{
    constructor({logoWrapper}){
        this.logoWrapper = logoWrapper;       
        this.content = "11C";
        this.sentence = new Sentence(this.content, this.logoWrapper);
    };

    start(){
        this.sentence.generateLogo();
        this.sentence.visualEffect();
        
    };
};

const index = new App({   
    logoWrapper: document.querySelector(".main-container__logo")
});
index.start();