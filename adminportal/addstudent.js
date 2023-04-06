const studentName = document.querySelector(".name");
const address = document.querySelector(".adress");
const genter = document.querySelector(".Genter");
const dob = document.querySelector(".dob");
const addno = document.querySelector(".addno");
const parent = document.querySelector(".parent");
const grade = document.querySelector(".grade");
const submit = document.querySelector(".submit");

class AddingStudent {
  constructor(name,adress, dob, bloodGroup) {
    this.name = name;
    this.address = adress
    this.dateofbirth = dob;
    this.bloodGroup = bloodGroup;
  }

  details() {
    let date = new Date();
    let age = date.getFullYear() - this.dateofbirth;
    console.log(age);

    return ` name:${this.dateofbirth}`;
  }
}


submit.addEventListener("click",() =>{
// studentName.innerHTML
localStorage.setItem("studentname",studentName.value)
})
// localStorage.clear(")