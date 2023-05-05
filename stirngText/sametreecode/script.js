// -------------------THIS IS V1--------------------------
//      USING THE COUNT

// const string = "00100111001001010101010000101011101010101";

// function findNumberOfZerosAreEven(string){
//     let count = 0;
//     let even = true;
//     for(let position = 0; position < string.length; position++){
//         if(string[position] === "0"){
//             count++
//         }
//     }
//     if(count % 2 == 0 ){
//         console.log("even");

//     }else{
//         console.log("odd");

//     }
//     console.log("this is count:",count);

// }
// findNumberOfZerosAreEven(string)

// --------------------------------------------------------------

// ------------------------------THIS IS V2-------------------------
//          MAKING A  0 ARRAY AND FIND THE LENGTH

// const string = "001001110010010101010100001010111010010101";

// function findNumberOfZerosAreEven(string){
//     let zeroArray = []
//     for(let i = 0; i < string.length; i++ ){
//         if(string[i] == "0"){
//             zeroArray.push(string[i])
//         }
//     }
//     console.log(zeroArray);
//     let lengthOfZeroArray = zeroArray.length
//     if(lengthOfZeroArray % 2 == 0){
//         console.log("item is even");
//     }else{
//         console.log("item is odd");

//     }

// }
// findNumberOfZerosAreEven(string)

// --------------------------------THIS IS V3---------------
//           ADDING THE ALL ONE

// const string = "01001100001";
// function findNumberOfZeroAreEven(string) {
//   let addingArray = [];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == "0") {
//       addingArray.push(0);
//     } 
//     if(string[i] == "1") {
//       addingArray.push(1);
//     }
//  }
//    console.log(addingArray);
// let total = 0;
//   for(let i = 0; i < addingArray.length; i++ ){
//     total += addingArray[i] 
//   }
//   console.log(total);
  
// }
// findNumberOfZeroAreEven(string)


// ------------------------------------THIS IS V4---------
//         USING AN ANOTHER METHOD OF FINDING EVEN NUMBER

const string = 