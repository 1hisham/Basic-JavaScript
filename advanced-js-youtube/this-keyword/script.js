//THIS IN OBJECT 


// const myObject = {
//     first:1,
//     second:2,
//     third: function(){
//         console.log(this);
//     }
// }
// // myObject.third()


// myObject.third = myObject.third.bind(myObject)

// let newObj = myObject.third

//  newObj()


//THIS IN CLASS

class MyClass{
    myFuction(){
        console.log(this);
    }
}

let obj  = new MyClass();
let newObj = obj.myFuction.bind(obj);
newObj(obj);
