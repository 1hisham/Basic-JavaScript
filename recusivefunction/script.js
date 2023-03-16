function foo(num){
    if(num === 0) return 0
    console.log(num);
    return (function fooOf(num){
        console.log(num);
        
        fooOf(num)
        return fooOf(num - 1)
    })
}

