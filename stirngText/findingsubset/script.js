// const string = "This is my string and i want";
// const findString = "is";

// function searchSubstring(string, searchString) {
// let retVal = -1;
//   const lengthOfMainStirng = string.length;
//   for (let i = 0; i < lengthOfMainStirng; i++) {
//     if (string[i] == searchString[0]) {
//       if (findingStringAtPosition(i, searchString, string)) {
//         retVal = i;
//         break;

//       };
//     }
//   }

//   return retVal;
// }

// function findingStringAtPosition(index, searchString, string) {
//   const lengthOfSubstring = searchString.length;
//   let j = 0;
//   let i = index;

//   while (j < lengthOfSubstring) {
//     if (searchString[j] !== string[i]) {
//       return false;
//     }
//     i++;
//     j++;
//   }
//   return true;
// }
// console.log(searchSubstring(string, findString));












/// TO OBSERVE THE RETUN IN THIS FUNTION IF IT IS NEGATIVE SHOW -1 AND IT IS POSITVIE SHOW 1

// const string = "This is my string and i want";
// const findString = "string";

// function stringOccurance(mainString, subString) {
//   let j = 0;
//   let i = 0;
//   const lengthOfMainStirng = mainString.length;
//   const lengthOfSubstring = subString.length;

//   while (i < lengthOfMainStirng) {
//       if (mainString[i] == subString[0]) {
//         while(j< lengthOfSubstring){
//             if (mainString[i] !== subString[j]) {
//                 console.log("enter the lf");
//               break
//             }
//             console.log(i,j);

//             j++
//             i++

//         }

//         //   console.log(mainString[i],subString[j]);

//         //     // if (lengthOfSubstring - 1 == j) {
//         //     //     console.log("item found");
//         //     // }
//         // }
//         // console.log(i, j);
//         // j++;

//     }
//     i++;
//   }
// }
// stringOccurance(string, findString);















// function checking(mainindex, substing, mainstring) {
//   const lengthOfSubstring = substing.length;
//   let j = 0;
//   let foundPosition = mainindex;
//   let i = mainindex;

//   while (j < lengthOfSubstring) {
//     if (substing[j] !== mainstring[i]) {
//       return i;
//     }
//     i++;
//     j++;
//   }
//   console.log("item found at ", foundPosition);
//   itemFound = true;
//   // return foundPosition;
// }

// stringOccurance(string, findString);

// function toFindthestirng(string, findString) {
//   for (let i = 0; i <= string.length - findString.length; i++) {
//     let j = 0;
//     let assume = true;
//     while (j < findString.length) {
//       if (findString[j] !== string[i + j]) {
//         assume = false;
//         break;
//       }
//       j++;
//     }
//     if (assume) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(toFindthestirng(string, findString));













// const string = "helllo";
// const findString = "lo";

// function findIndexOfSubString(string, substring) {
//   // p1 points to the current index of string array
//   // p2 points to the current index of substring array

//   let p1 = 0;
//   let p2 = 0;

//   let subStringIndex = -1;

//   while (p1 <= string.length) {
//     if (string[p1] == substring[p2]) {
//       if (p2 == 0) {
//         subStringIndex = p1;
//       }
//       p1++
//       p2++;

//       if (p2 == substring.length) {
//         console.log("substring found at", subStringIndex);
//         return;
//       }


//       continue;
//     }
//     p2 = 0;
//     if (string[p1] == substring[p2]) {
//         subStringIndex = p1
//         p2++
//         p1++
//         continue
//     }

//     p1++
//   }

//   console.log("substring not found in the string array");
//   return
// }
















// findIndexOfSubString(string, findString);

// console.log("hello");

// function findIndexOfSubString(string, findString){
//     let i = 0;
//     i = findLocation(i,string,findString)
//     let findposion = i
//     let j = 0;
//     while(j< findString.length){
//         if(i == string.length){
//             console.log("not found");
//             return
//         }
//         if(string[i]!==findString[j]){
//             i++
//           findposion =  findLocation(i,string,findString)
//         }
//         j++
//     }

// }















// function findLocation(index,string,findString){

//     while(index < findString.length){
//        if(string[index] == findString[0]){
//          return index
//        }

//     index++
//    }
//    console.log("item found at", index);

// //    return index
// }

// findIndexOfSubString(string, findString)
