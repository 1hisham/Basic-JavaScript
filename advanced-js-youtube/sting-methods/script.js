// STING METHODS


let referneText = "hello world"

console.log(referneText.length);
console.log(referneText.slice(1),'slice');

// substr()

let part = referneText.substr(1)
console.log(part);

//REPLACE

let replace = referneText.replace('hello','hii')
console.log(replace,"/replace");


//replaceAll

let all = "there is a long road. there is a huge tree. there is a man standing"
console.log(all.replaceAll("there","There"),"repaceAll");
console.log(all.replace("there","There"),"just repalce");

//toUpperCase and toLowerCase

console.log(referneText.toLowerCase(),"//to lower");
console.log(referneText.toUpperCase(),"//toupper");

//concat
let text1 = "hello"

console.log(text1.concat(' ', "world"));

//trimStart() trimEnd()  trim()
let textTrim = "     hello world    "
console.log(textTrim.trimStart(),"trimStart");
console.log(textTrim.trimEnd(),"trimEnd");
console.log(textTrim.trim(),"trim");


// padStat() padEnd()

let text = "he"
console.log(text.padStart(5,"a"),"padStart");
console.log(text.padEnd(4,"a"),"padEnd");

// charAt()

console.log(referneText.charAt(0),"charAt");
console.log(referneText.charCodeAt(0),"charCodeAt");

//split()


console.log(referneText.split(" "),'split');