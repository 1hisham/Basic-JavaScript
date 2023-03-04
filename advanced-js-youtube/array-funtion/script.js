const arr = [
    {
        name: "alice",
        mark:23,
        place: "kannur"
    },
    {
        name: "bob",
        mark:27,
        place: "palakad"
    },
    {
        name: "catherine",
        mark:25,
        place: "trissur"
    },
    {
        name: "danel",
        mark:29,
        place: "kollam"
    },
];

// console.log(arr);

//  FOR EACH FUNTION FOR ITTERATION

// let sum = 0
// let totalName = arr.forEach(item => {
//     console.log(item.mark);
//     sum = sum+item.mark
// })
// console.log(sum);


//FIND IN ARRAY

// let findingName = arr.find(item => {
//     return item.name ==="bob";
// });
// console.log(findingName);

// FILTER IN AN ARRAY

// let filterArray = arr.filter(item =>{
//     return item.mark < 16
// })

// console.log(filterArray);

//MAP IN AN ARRAY

// let mapitems = arr.map((item) => {
//     return {
//         ...item,
//         contury:'india'
//     };
// })

// console.log(mapitems);


//REDUCE METHOD IN A ARRAY
let sum = arr.reduce((total,item) =>{
    return total + item.mark
}, 0)

console.log(sum);


 



