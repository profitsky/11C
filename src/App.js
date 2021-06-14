import "../src/sass/main.scss";
import { Sentence } from "./app/Sentence";
import { Contact } from "./app/Contact"
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free;
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free;
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free;
class App{
    constructor({logoWrapper}){
        this.logoWrapper = logoWrapper;       
        this.content = "11C";
        this.sentence = new Sentence(this.content, this.logoWrapper);
        this.contact = new Contact();

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