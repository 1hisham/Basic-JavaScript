var obj = {
    name : 'alice',
    mark: '34',
    place:'kannur',
    subject:{
        teacher:'bob'
    }

}

let {
    subject:{
        teacher
    }
}= obj

console.log(teacher);

let arr =[2,78,25,74];

let [val1,val2,val3] = arr

console.log(val1);
