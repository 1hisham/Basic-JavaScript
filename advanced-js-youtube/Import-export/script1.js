function addArray(arr){
    return arr.reduce((total,item) => total + item , 0);
}
function just(){
    console.log('hello');
}

export { addArray , just};