let button = document.getElementById('mybutton')

button.onclick = () => {
    console.log('started click event');
    let arr =[]
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        success: (data) => {
            console.log(data);

            console.log('ajax1 started');
            arr.push(data.title)
            console.log('ajax1 started');
        },
        async:false,


    });
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos/2',
        success: (data) => {
            console.log(data);
            console.log('ajax2 started');
            arr.push(data.title)
            console.log('ajax2 started');
            document.getElementById('mytext').value=arr.join('\n');
        },
        async:false,
        
        
    });
    
    console.log('ended click event');
    


}