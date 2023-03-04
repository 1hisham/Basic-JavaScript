

















function add(a, b){
    function myAdd(){
    const c = a + b;
    return c
}
return myAdd
}

function main(){
    const res = add(3, 4);
    const val = res()
    console.log(val);
}
main();





// let objects =[
//     {
//         name:'one',
//         msg:'hello i am one'
//     },
//     {
//         name:'two',
//         msg:'hello i am two'
//     },
//     {
//         name:'three',
//         msg:'hello i am three'
//     },
// ];
// function main(){
//     objects.forEach((item) => {
//         const bt = document.createElement('button')
//         bt.innerHTML = item.name;
//         bt.onclick = getCallBack(item.msg);
//         document.body.appendChild(bt)
//     })
// }
// function getCallBack(arg){
//     return function(){
//         alert(arg)
//     }
// }
// main();