//CASE OF AN INTEGER

// function one(){
//     var a = 100;
//     two(a);
//     console.log('one',a);
// }

// function two(a){
//     a=a+1;
//     console.log('two',a);
// }

// one();


//CASE OF AN OBJCT

// function one(){
//     let a = {
//         value:100
//     }
//     two(a);
//     console.log("one",a.value);
// }
// function two(a){
//     a.value = a.value +1;
//     console.log('two', a.value);
// }
// one()

// CASE OF ARRAY

// function one(){
//     let a =[100];
//     two(a);
//     console.log('one', a[0]);
// }
a = [100]
function two(a){
    a[0] = a[0] + 1
    console.log('two',a[0]);

}
console.log(a)
two(a);
console.log(a)