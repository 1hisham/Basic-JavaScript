var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

              
// let data = {element: "barium"};

// fetch("http://127.0.0.1:8080", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'}, 
//   body: JSON.stringify(data)
// }).then(res => {
//   console.log("Request complete! response:", res);
// });


// fetch("http://127.0.0.1:8080")
// .then(response => response.json())
// .then(data=> {
//     console.log(data);
    
// })


function foo(num){
    if(num === 0) return 0
    console.log(num);
    return (function fooOf(num){
        console.log(num);
        
        fooOf(num)
        return fooOf(num - 1)
    })
}
function foo(num){
    if(num === 0) return 0
    console.log(num);
    return (function fooOf(num){
        console.log(num);
        
        fooOf(num)
        return fooOf(num - 1)
    })
}

