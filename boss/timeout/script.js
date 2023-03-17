
let vi ="";

function time(end){
     ti = Date.now()
  function out(){
      setTimeout(() => {
          
          console.log(time(5000));
          
         vi  = "insdie funtion"+ti
        }, end);
    return vi
}
 return out()

}


console.log("outside the function",Date.now());


setTimeout(time(0),0);
