const container = document.querySelector('.container')

let wordsArray = [
  "bat",
  "cat",
  "sat",
  "bun",
  "sun",
  "num",
  "ant",
  "and",
  "fix",
  "own",
  "are",
  "fly",
  "odd",
  "ape",
  "fry",
  "our",
  "ace",
  "for",
  "pet",
  "act",
  "got",
  "pat",
  "ask",
  "get",
  "peg",
  "arm",
  "god",
  "paw",
  "age",
  "gel",
  "pup",
  "ago",
];



function numberColoms(numbercoloumn){
  let total = ''
  let totalLetters = ""
  for (let j = 1; j< numbercoloumn ;j++){
    div = `<div class="coloumn${j}"></div>`
      for(let i = 97; i < 123 ; i++){
   
      html=`<li>${String.fromCharCode(i)}</li>`
      totalLetters += html
    

  }
   total += div
  }
  container.innerHTML = total
  // let total = ""
  // for(let i = 97; i < 123 ; i++){
   
  //     html=`<li>${String.fromCharCode(i)}</li>`
  //     total += html
    

  // }
  // container.innerHTML = total
  
  
}
numberColoms(4)













// var charCode = "z".charCodeAt(0);
// console.log(charCode);























































// const first = document.querySelectorAll(".first");
// const second = document.querySelectorAll(".second");
// const third = document.querySelectorAll(".third");

// let arr = [
//   "bat",
//   "cat",
//   "sat",
//   "bun",
//   "sun",
//   "num",
//   "ant",
//   "and",
//   "fix",
//   "own",
//   "are",
//   "fly",
//   "odd",
//   "ape",
//   "fry",
//   "our",
//   "ace",
//   "for",
//   "pet",
//   "act",
//   "got",
//   "pat",
//   "ask",
//   "get",
//   "peg",
//   "arm",
//   "god",
//   "paw",
//   "age",
//   "gel",
//   "pup",
//   "ago",
// ];

// function letter(letter, loc) {
//   return arr.filter((item) => {
//     return item[loc] == letter;
//   });
// }

// let loc;

// first.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     loc = 0;
//     console.log(loc);
   
//     forOutput(letter(item.innerHTML, loc), loc);
//   });
//   item.addEventListener("mouseleave", () => {
//     second.forEach((div) => {
//       div.classList.remove("item");
//     });
//     third.forEach((div) => {
//       div.classList.remove("item");
//     });
//   });
// });

// second.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     console.log(item.innerHTML);
//     loc = 1;
//     console.log(loc);
//     forOutput(letter(item.innerHTML, loc), loc);
//   });
//   item.addEventListener("mouseleave", () => {
//     first.forEach((div) => {
//       div.classList.remove("item");
//     });
//     third.forEach((div) => {
//       div.classList.remove("item");
//     });
//   });
// });
// third.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     console.log(item.innerHTML);
//     loc = 2;
//     console.log(loc);
//     forOutput(letter(item.innerHTML, loc), loc);
//   });
//   item.addEventListener("mouseleave", () => {
//     first.forEach((div) => {
//       div.classList.remove("item");
//     });
//     second.forEach((div) => {
//       div.classList.remove("item");
//     });

//   });
// });

// function forOutput(items, loc) {
//   console.log(items, "items");
//   console.log(loc, "location");
//   let letterArray =[]
 

//   items.forEach((item) => {
//     if (loc == 0) {
//       second.forEach((div) => {
//         if(div.innerHTML == item[1]){
//           let array = countAllLetter(letterArray)
//           console.log(array);
          

//       letterArray.forEach(word => {
//        console.log(word);
      
         
//           if (div.className == `${item[1]} second`) {
//             div.classList.add("item");
//           }
     
          
//         })
//         letterArray.push(div.innerHTML)
//         }
//         console.log(div);
      
      
       
     
//       });
//       third.forEach((div) => {
//         if (div.className == `${item[2]} third`) {
//           div.classList.add("item");
//         }
//       });
//     }
//     if (loc == 1) {
//       third.forEach((div) => {
//         if (div.className == `${item[2]} third`) {
//           div.classList.add("item");
//         }
//       });
//       first.forEach((div) => {
//         if (div.className == `${item[0]} first`) {
//           div.classList.add("item");
//         }
//       });
//     }
//     if (loc == 2) {
//       second.forEach((div) => {
//         if (div.className == `${item[1]} second`) {
//           div.classList.add("item");
//         }
//       });
//       first.forEach((div) => {
//         if (div.className == `${item[0]} first`) {
//           div.classList.add("item");
//         }
//       });
//     }
//   });
// }

// // for item count

// function countAllLetter(Array){
//   const mapping = new Map()
//   for(let i = 0; i< Array.length;i++){
//   if(!mapping.has(Array[i])){
//       mapping.set(Array[i],1)
//   }else{
//       mapping.set(Array[i], mapping.get(Array[i])+1)
    
//   }
// }
// return mapping
// }