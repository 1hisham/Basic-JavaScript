// function foo(number){
//     let total = () => {
//         if(number%3===0 || number%5===0){

//             console.log("sum",number);

//             return number
//         }
//     }
//     console.log('total',);

//     if(number === 1) return total
// return foo(number - 1)
// }
// console.log("sum",foo(10));

// foctorial
// function fact(n){

//     if(n < 1 ) return 0
//     if(n%3!==0){
//         console.log('hello');
//         n= Math.floor(n/3) *3

//     }
//     console.log(n,"num");
//     return n + fact(n-1)
// }
// console.log(fact(10),"oput");

// var Str = "Hello World!!"

// // removing character 'e'
// var newStr = Str
let di = 5
// console.log(newStr);

let total = "";
function fnMaking(loop) {
  for (let i = 1; i < loop; i++) {
    let aa = `function foo${i}(){
        console.log(di+${i});
        foo${i + 1}()
    }
    `;
    if (i + 1 === loop) {
      aa = `function foo${i}(){
            console.log(di+${i});
        }     
        `;
    }
    total += aa;
  }
}

fnMaking(5);
let fn = eval(total);
console.log(total, "total");

foo1();
