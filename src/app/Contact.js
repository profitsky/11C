export class Contact{
    constructor(emailButton, horizontalFrame, contact, frame, sendButton, textArea, counterWrapper)
    {
        this.emailButton = emailButton;
        this.horizontalFrame =horizontalFrame;
        this.contact = contact;
        this.frame = frame;
        this.sendButton = sendButton;
        this.textArea = textArea;
        this.counterWrapper = counterWrapper;
        this.loadFunctionality();
    };

    emailButtonFunctionality(){        
        this.emailButton.addEventListener("click", ()=> {        
            this.pressedEmailButton(this.emailButton);           
        })
    };

    pressedEmailButton(button){
        button.classList.remove("button--unPressed");
        button.classList.add("button--pressed");
        this.horizontalFrame.classList.add("contact__horizontal-frame--active");
        this.horizontalFrame.classList.remove("contact__horizontal-frame--deActive");

        setTimeout(() =>{
            this.frame.classList.remove("contact__overflow--deActive");
            this.frame.classList.add("contact__overflow--active");
            this.contact.style.zIndex = "1";            
        },1000)
    };

    closeButton(){       
        this.sendButton.addEventListener("click", () =>{
            this.frame.classList.remove("contact__overflow--active");
            this.frame.classList.add("contact__overflow--deActive");
            this.contact.style.zIndex = "-1";                
            setTimeout(() =>{            
                this.horizontalFrame.classList.add("contact__horizontal-frame--deActive");
                this.horizontalFrame.classList.remove("contact__horizontal-frame--active");
                setTimeout(() => {
                    this.emailButton.classList.remove("button--pressed");
                    this.emailButton.classList.add("button--unPressed");
                    this.textArea.value = "";
                }, 700);
            },500)
        })
    };

    countLetter(){

       
        this.textArea.addEventListener("input", (e) =>{
            this.counterWrapper[0].innerHTML = this.textArea.value.length;            
        })
    };

    loadFunctionality(){
        this.emailButtonFunctionality();
        this.closeButton();
        this.countLetter();
        
    };
};

