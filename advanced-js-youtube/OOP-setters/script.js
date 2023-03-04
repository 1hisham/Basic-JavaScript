class Button{
    constructor(name){
        this.button = document.createElement('button')
        this.button.innerHTML = name;
        document.body.appendChild(this.button)
        
    }
    
    set width(width){
        this.button.style.width = width + "px"
    }
    set height(height){
        this.button.style.height = height + "px"
    }

    get width(){
        return this.button.style.width
    }
    get height() {
        return this.button.style.height
    }
}
let btn = new Button('click Me!');
btn.height = 100
btn.width = 100

new Button('click here')