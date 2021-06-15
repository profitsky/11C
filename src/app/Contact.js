export class Contact{
    constructor()
    {
        this.loadFunctionality();
    }

    emailButtonFunctionality(){
        const button = document.querySelector(".button--email");
        button.addEventListener("click", ()=> {        
            this.pressedEmailButton(button);
        })
    };

    pressedEmailButton(button){
        button.classList.add("button--pressed");
        const horizontalFrame = document.querySelector(".contact__horizontal-frame");
        const contact = document.querySelector(".contact")
        const frame = document.querySelector(".contact__overflow")
        horizontalFrame.classList.add("contact__horizontal-frame--active")

        setTimeout(() =>{
            frame.classList.add("contact__overflow--active");
            contact.style.zIndex = "1";            
        },1000)
    };

    loadFunctionality(){
        this.emailButtonFunctionality();
    }
};

