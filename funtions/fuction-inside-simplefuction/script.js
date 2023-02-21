function first(){
  var x = 0
  function second(y){
    x ++
    return x + y;
  }
  // console.log(second,'this is second');
  return second;
}
second = first()
console.log(second(4));
console.log("fhash");
// function first(numberone, numbertwo){
//   function second(x){
//    sum = x+y
//     return sum
  
//   }
//   numberthree = numberone + numbertwo
  
//   return second(numberthree)

// }

// console.log(first(5,10));