import "../src/sass/main.scss";
import { Sentence } from "./app/Sentence";
import { Contact } from "./app/Contact"
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid' // https://fontawesome.com/icons?d=gallery&s=solid&m=free;
import '@fortawesome/fontawesome-free/js/regular' // https://fontawesome.com/icons?d=gallery&s=regular&m=free;
import '@fortawesome/fontawesome-free/js/brands' // https://fontawesome.com/icons?d=gallery&s=brands&m=free;
class App{
    constructor({logoWrapper, emailButton, horizontalFrame, contact, frame, sendButton, textArea, counterWrapper}){
        this.logoWrapper = logoWrapper;
        this.emailButton = emailButton;  
        this.horizontalFrame = horizontalFrame;
        this.contact = contact;
        this.frame = frame;
        this.sendButton = sendButton;
        this.textArea = textArea;
        this.counterWrapper = counterWrapper;
        this.content = "11C";
        this.sentence = new Sentence(this.content, this.logoWrapper);
        this.contact = new Contact(this.emailButton, this.horizontalFrame, this.contact, this.frame, this.sendButton, this.textArea, this.counterWrapper);

    };

    start(){
        this.sentence.generateLogo();
        this.sentence.visualEffect();   
    };
};

const index = new App({   
    logoWrapper: document.querySelector(".main-container__logo"),
    emailButton: document.querySelector(".button--email"),
    horizontalFrame: document.querySelector(".contact__horizontal-frame"),
    contact: document.querySelector(".contact"),
    frame: document.querySelector(".contact__overflow"),
    sendButton: document.querySelector(".button--send"),
    textArea: document.querySelector(".contact__textBox-textarea"),
    counterWrapper: document.querySelectorAll(".heading--tertiary")
});
index.start();