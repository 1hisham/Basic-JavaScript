
function time(){
  function out(ti){
          console.log("insdie funtion"+ti);
    return ti
}
 return out(ti)
}
console.log("outside the function",Date.now());
ti = Date.now()
setTimeout((ti) => {
    time(ti)
}, 3000);









///Final Answer\



// function foo(cbTime){
//     setTimeout(() => {
//         console.log(cbTime);
//     }, 5000);
    
// }
// // foo()
// foo(Date.now())
// console.log(Date.now())