export const alphabet = {    
    A: [2,3,4,8,9,11,12,14,15,19,20,21,22,26,27,28,29,30,31,32,33,34,35,36,40,41,41,43,47,48],
    B: [1,2,3,4,5,6,8,9,13,14,15,16,20,21,22,23,24,25,26,27,29,30,34,35,36,37,41,42,43,44,45,46,47,48],
    C: [2,3,4,5,6,8,9,13,14,15,16,22,23,29,30,36,37,41,42,44,45,46,47,48],
    D: [1,2,3,4,5,6,8,9,13,14,15,16,20,21,22,23,27,28,29,30,34,35,36,37,41,42,43,44,45,46,47,48],
    E: [1,2,3,4,5,6,7,8,9,15,16,22,23,24,25,26,27,29,30,36,37,43,44,45,46,47,48,49],
    F: [1,2,3,4,5,6,7,8,9,15,16,22,23,24,25,26,27,29,30,36,37,43,44],
    G: [2,3,4,5,6,8,9,13,14,15,16,22,23,26,27,28,29,30,34,35,36,37,41,42,44,45,46,47,48],
    H: [1,2,6,7,8,9,13,14,15,16,20,21,22,23,24,25,26,27,28,29,30,34,35,36,37,41,42,43,44,48,49]
};

export const digits = {
    1:[3,4,8,9,10,15,16,21,22,27,28,33,34,37,38,39,40,41,42]
};

export class Character{
    constructor(){
        this.letterCellNumber = 49;
        this.digitCellNumber = 42;
        this.cellSize = "2rem";
    };

    render(char){
        const regDigits = /\d+/;
        
        const character = document.createElement("div");        
        character.classList.add("main-container__logo-letter");
        character.style.gridTemplateRows = `repeat(${this.letterCellNumber/7}, ${this.cellSize})`;
        if(regDigits.test(char)){
            character.style.gridTemplateColumns = `repeat(${this.digitCellNumber/7}, ${this.cellSize})`;
            for(let i = 0; i < this.digitCellNumber; i++){
                const cell = document.createElement("div"); 
                character.appendChild(cell);          
            };
            this.addActiveClass(char,digits, character);
        }
        else{
            character.style.gridTemplateColumns = `repeat(${this.letterCellNumber/7}, ${this.cellSize})`;
            for(let i = 0; i < this.letterCellNumber; i++){                
                const cell = document.createElement("div");
                character.appendChild(cell)
            };

            this.addActiveClass(char,alphabet, character);
        };
        return character;
    };

    addActiveClass(char, source, container)
    {
        const letter = char;
        const array = source[letter];
        array.forEach(element => container.querySelectorAll("div")[element-1].classList.add("cell"));
    };
};