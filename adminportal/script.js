const root = document.querySelector('.root')
class AddingStudent {
    constructor(name, place, housename, pin, dob, bloodGroup){
        this.name = name;
        this.address ={place: place,housename: housename,pincode:pin}; 
        this.dateofbirth = dob;
        this.bloodGroup = bloodGroup
    }

    
    details(){
        let date = new Date()
        let age =  date.getFullYear()-this.dateofbirth 
        console.log(age);
        
        
     return(` name:${this.dateofbirth}`);
        
      
    }
}
let test = new AddingStudent()

const firstStudent = new AddingStudent("sugu", "london","2341", "rosevilla b2"," 2014",'b+');
const secondStudent = new AddingStudent("jack", "paris","2641", "lonconstreet b5"," 24/6/2015",'ab+');
const thiedStudent = new AddingStudent("rose", "losAgeles","3416", "clocktown c42"," 27/3/2018",'a+');
studentone = JSON.stringify(secondStudent)
localStorage.setItem("Studentone",studentone)
onestudent = localStorage.getItem("Studentone")
console.log(firstStudent.details());



// console.log(JSON.parse(onestudent));

