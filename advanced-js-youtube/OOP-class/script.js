
class Student{
    name;
    yob;
    constructor(name, yob){
        this.name = name;
        this.yob = yob;
    }

    getAge(){
        return new Date().getFullYear() - this.yob;
    };
    getName(){
        return this.name;
    };
}
Student.printMinYob = function(...arg){
    let arr = arg.map((item => item.yob));
    console.log(Math.max(...arr));
}




let student1 = new Student('jack', 2000);
let student2 = new Student('john', 1990);
let student3 = new Student('jenny', 2002);

Student.printMinYob(student1, student2, student3);


// let student1 = {
//     name: 'jack',
//     yob: 2000,
//     getAge: function(){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function(){
//         return this.name
//     }
// }

// let student2 = {
//     name: 'john',
//     yob: 2002,
//     getAge: function(){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function(){
//         return this.name
//     }
// }

// let student3 = {
//     name: 'cook',
//     yob: 1990,
//     getAge: function(){
//         return new Date().getFullYear() - this.yob;
//     },
//     getName: function(){
//         return this.name
//     }
// }
// console.log(student1.getAge(), student1.getName());

