// callback function is function passed into another fuction as a argument, which is then invoked inside the outer function to
// complete some kind of routine or action


// function greeting(name){
//     alert(`hello, ${name}`);

// }

// function processUserInput(callback){
//     const name = prompt("please enter your name")
//     callback(name)
// }
// processUserInput(greeting)



// // Asyncronus callback

// var button = document.getElementById("mybutton");
// button.onclick = () => {
//     console.log('started click event');

//     $.ajax({
//         url: 'https://jasonplaceholder.typicode.com/todos/1'
//     })
// }





//////////////////////////////////////////////


let callbackList =[];
 function register(cbfn,cbarg,cbtime){ 
     let x ={fn:cbfn,arg:cbarg,time:cbtime};
     callbackList.push(x);
   
    }
    
    count = 0

function sayHello(name,time){
 
        console.log('hello',name,count++);

        
    }
    
function sayBye(name){

console.log('bye',name,count++);

}

function sayTime(tm){
    console.log("registed at", tm ,"now it is " ,Date.now());
}


register(sayHello,"jack",9000)
// register(sayBye,"bon",2000)







// function controller(i){
//     console.log('inside controller');
//     for(let i = 0; i< callbackList.length;i++){
//         setInterval(() => {
//             callingFuc()
            
//             return i
//         }, callbackList[i].time);
        
//         // callbackList[i].fn(callbackList[i].arg);
//     }
// }
// setInterval(controller, 3000);


// function callingFuc(i){ 
// //   callbackList[i].fn(callbackList[i].arg)
// console.log(callbackList);


//  