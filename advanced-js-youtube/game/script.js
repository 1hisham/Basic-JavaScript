const first = document.querySelector(".first")

let arr = ["bat",'cat','sat','bun','sun','num', 'ant']

function letter(letter,location){
    return  arr.filter(item => {
    return item[location] == letter
})
}
console.log(letter("u",2));


