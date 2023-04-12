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

function toCecerCode(item,num){
  let ascciArray=[]
  let ceserarray = []
  let wordsarray = item.split("")
  console.log(wordsarray);
  
  wordsarray.forEach((word,idx) => {
    let ascci =item.charCodeAt(idx)
    ascciArray.push(ascci + num)
    console.log(ascci);
  })
  ascciArray.forEach((code,idx) => {
    let toWords = String.fromCharCode(code)
    ceserarray.push(toWords)

  })
  console.log("ceser:",ceserarray);
  let codedItem = ceserarray.join('')
  return codedItem
  
  }

console.log(toCecerCode("hello",2));

function fromCecercode(item,num){
  let ascciArray=[]
  let ceserarray = []
  let wordsarray = item.split("")
  console.log(wordsarray);
  
  wordsarray.forEach((word,idx) => {
    let ascci =item.charCodeAt(idx)
    ascciArray.push(ascci - num)
    console.log(ascci);
  })
  ascciArray.forEach((code,idx) => {
    let toWords = String.fromCharCode(code)
    ceserarray.push(toWords)

  })
  console.log("ceser:",ceserarray);
  let codedItem = ceserarray.join('')
  return codedItem
  
}
console.log(fromCecercode("jgnnq" , 2));





// console.log("hello".charCodeAt(0));
// console.log(String.fromCharCode(65));
