fetch("http://localhost:5500/search")
.then(response => response.json())
.then(data =>{
    console.log(data);
    
}).catch(err=>console.log(err))

fetch("http://localhost:5500/post", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        test: "foo",
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})