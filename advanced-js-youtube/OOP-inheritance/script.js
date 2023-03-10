// class Student {
//     name;
//     yob;
//     constructor(name, yob) {
//         this.name = name;
//         this.yob = yob;
//     }

//     getAge() {
//         return new Date().getFullYear() - this.yob;
//     };
//     getName() {
//         return this.name;
//     };

// }

//  Student.printMinYob = function(...args) {
//     let arr = args.map((item => item.getAge()))
//         console.log(Math.min(...arr))
// }
//     let student1 = new Student('jack', 1990)
//     let student2 = new Student('mang', 1995)
//     let student3 = new Student('oran', 2006)

// Student.printMinYob(student1,student2,student3)

class Button {
    constructor(name) {
        this.button = document.createElement('button')
        this.button.innerHTML = name;

        document.body.appendChild(this.button);
    }
    
    onClick(fn) {
        this.button.onclick = fn;
    }
    
}




class Greenbtn extends Button{
    constructor(name){
        super(name)
    }

    onClick(){
        super.onClick(function(){
            if(this.button.style.background == "green"){
                this.button.style.color = "white"
                this.button.style.background = "blue";
            }else{
                this.button.style.background = "green";
                this.button.style.color = "red"
            }
           
        }.bind(this));
    }
}

let b1 = new Greenbtn('Gbutton');
b1.onClick(function() {
    console.log("cliked");
});
