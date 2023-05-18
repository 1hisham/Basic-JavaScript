// var http = require('http');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);

// let data = {element: "barium"};

// fetch("http://127.0.0.1:8080", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'},
//   body: JSON.stringify(data)
// }).then(res => {
//   console.log("Request complete! response:", res);
// });

// fetch("http://127.0.0.1:8080")
// .then(response => response.json())
// .then(data=> {
//     console.log(data);

// })

// let num = 0
//   function foo(num){
//     console.log(num);

//     setInterval(() => {

//     }, 1000);
//   }
//   foo(num)

// let i=1;
// function Itteration(i){
//     myVar=setTimeout(function(){
//        console.log(i);

//        if(i==5){
//          i = 0
//        }
//       Itteration(i+1)
//     },1000)
// }

// Itteration(i);

// let fetchData = () => {
//    let item = fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         return data

//     })
//     return item
// }

// function foo(){
//     let itemdata =  fetchData()
//     console.log(itemdata)
// }

// foo()
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }

//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfter2Seconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }

//   asyncCall();
//   console.log("1");

//   function fetchDemo() {

//     return fetch("https://raw.githubusercontent.com/1hisham/traing-oct/main/server/popularGiftsNow.json")
//     .then((response)=> { return response.json();})
//     .then((data) =>  {
//         console.log(data);

//         return data;});
// }

// // fetchDemo().then(function(result) {
// //     console.log(result);
// //     console.log("hii");

// // });

//  async function foo(){
//      console.log("4");
//      let itemdata = await fetchDemo()
//     console.log(itemdata);
//     console.log("iam here");

// }
// console.log("5");
// foo()

// let object = [
//     {
//     id : 1 ,
//     name :"jack",
//     age:4,
// },
// {
//     id : 2 ,
//     name :"jack",
//     age:4,
// },
// {
//     id : 3 ,
//     name :"jack",
//     age:4,
// }
// ]

// console.log(object);

// object.push({
//     id : 4 ,
//     name :"jack",
//     age:4,
// })

// ceser something

// function toCecerCode(item,num){
//   let ascciArray=[]
//   let ceserarray = []
//   let wordsarray = item.split("")
//   console.log(wordsarray);
//   if(num > 26){
//     num = num%26
//   }

//   wordsarray.forEach((word,idx) => {
//     let ascci =item.charCodeAt(idx)
//     console.log(ascci);

//      let codedasci = (ascci+num)
//      if(codedasci > 90 && codedasci < 96){

//       let differ =codedasci - 90
//       codedasci = 64 + differ
//      }
//      if(codedasci > 122){
//       let differ =codedasci - 122
//       codedasci = 96 + differ

//      }
//      console.log(codedasci);

//     ascciArray.push(codedasci)
//     console.log(ascci);
//   })
//   ascciArray.forEach((code,idx) => {
//     let toWords = String.fromCharCode(code)
//     ceserarray.push(toWords)

//   })
//   console.log("ceser:",ceserarray);
//   let codedItem = ceserarray.join('')
//   return codedItem

//   }

// console.log(toCecerCode("A",104));

// function fromCecercode(item,num){
//   let ascciArray=[]
//   let ceserarray = []
//   let wordsarray = item.split("")
//   console.log(wordsarray);

//   wordsarray.forEach((word,idx) => {
//     let ascci =item.charCodeAt(idx)
//     ascciArray.push(ascci - num)
//     console.log(ascci);
//   })
//   ascciArray.forEach((code,idx) => {
//     let toWords = String.fromCharCode(code)
//     ceserarray.push(toWords)

//   })
//   console.log("ceser:",ceserarray);
//   let codedItem = ceserarray.join('')
//   return codedItem

// }
// console.log(fromCecercode("jgnnq" , 3));

// console.log("hello".charCodeAt(0));
// console.log(String.fromCharCode(65));

//  FETCHING CYPTOAPP API PROJECT

// async function foo(){

// const url = 'https://crypto-news-live9.p.rapidapi.com/news/CryptoNews';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9e1fff0ea2mshe98c9fe2d38bd85p1ba772jsn548ce75befe5',
// 		'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// foo()

//     let fetchdata = async() =>{
//         let response = await fetch("imagesgittest/home-icon-silhouette-svgrepo-com (1).png")
//         let data = await response.json()
//         console.log(data);
//     }

// console.log(fetchdata);

// let pos = 0;
// let count = 0
// while(pos < array.length){
//     if(array[pos] > array[pos + 1]){
//         count++

//         let itemOnPosition = array[pos]
//         array.splice(pos,1,array[pos+1])
//          array.splice(pos+1,1,itemOnPosition)
//     }

//     console.log(count);
//     pos++
// }

// console.log(array);
// for(let i= 0 ; i < array.length ; i++){
//     let smallest = 0

//     for(let j = i ; j < array.length ; j++){

//     if(array[i] > array[j]){

//       smallest = array[j]
//     }
// }
// console.log(smallest);

// // array.push(smallest)
// }
// let array = [5,7,2,8,3 ];
// let i = 0
// while( i < array.length){
//     let smallest = 0
//     let j = i
//    while ( j <= array.length){
//     if(array[i] > array[j]){
//         smallest = array[i]
//         array[i] = array[j]
//         array[j] = smallest

//     }
//     j++
// }
// count++

//    i++
// }
// console.log(count);

// console.log(array);

//  BUBLE SORT

// let array =[2,5,6,8,9,1,4]
// let state = 1;

// function foo(ind) {
//   state = 1;
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] > array[i + 1]) {
//       store = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = store;
//       state = 0;
//     }
//     i++;
//   }
//   return array;
// }

//   while (1) {
//       foo();

//       if (state == 1) {
//           console.log(array,"array");

//           break;
//         }
//     }

// console.log(foo());

// BUBLE SORTING SIMPLE

// let array = [2, 5, 6, 8, 9, 1, 4];
// let state = 1;

// while (1) {
//   state = 1;
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] > array[i + 1]) {
//       store = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = store;
//       state = 0;
//     }
//     i++;
//   }
//   if (state == 1) {
//     console.log(array, "array");  
//     break;
//   }
// }


// const array = [ 2,5,6,11,-1,8,9,5,2,1,3,4]
// const targetValue = 10;
// // let total = 0
// // let submitArray = []
// let pos =0
// while(pos < array.length){
//   let i = pos+1;
//   while(i < array.length){
//     total = array[pos] + array[i]
//     if(total == targetValue){
//         submitArray.push([array[pos],array[i]])
//     } 
//     total = 0
//   i++
//   }
// pos++
// } 
// console.log(submitArray);

// partnerObj = {}

// let finalArray = []

// while (pos < array.length) {
//   let sumArray = []

//   if (array[pos] in partnerObj) {
//     sumArray[0] = array[pos]
//     sumArray[1] = partnerObj[array[pos]]
//     finalArray.push(sumArray)
//     pos++ 
//     continue
//   }

//   partner = targetValue - array[pos]
//   partnerObj[partner] = array[pos]

//   pos++ 

// }
// console.log(partnerObj)
// console.log(finalArray)


const array = [2 ,3 ,6 , 4, 5, 2, 9, 2, 6]
let ToMove = 2
let i = 0;
array[array.length ] = 5
console.log(array);


while(i < array.length){
  if(array[i] == ToMove){
    
  }else{

    
  }
  i++
}

