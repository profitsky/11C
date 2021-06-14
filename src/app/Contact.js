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
        const frame = document.querySelector(".contact__overflow")
        horizontalFrame.classList.add("contact__horizontal-frame--active")

        setTimeout(() =>{
            frame.classList.add("contact__overflow--active");
        },600)
        
        
    };

    loadFunctionality(){
        this.emailButtonFunctionality();
    }


};

