const obj1 ={
    name : 'codemalayalm',
    place: 'kerala',
    rank:100
};

// function myFunction(){
//     const name = obj1.name;
//     const place = obj1.place;
//     const rank = obj1.rank
//     console.log(name,place,rank);
// }

// insdted of useing step 8,9,10
// we can use 

// function myFunction(){
//     const {
//         name,
//         ...others
//     } = obj1
//     console.log(others,name);
// }




// myFunction();



//  IN ARRAYS WE CAN USE
 const marks = [1,2,3,4,5]

 function myFunction(){
    const [a,d,...others] = marks
    
     console.log(a,d,others);
 }
 myFunction()