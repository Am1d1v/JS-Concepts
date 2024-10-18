

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        //console.log(data)
        return data.json();
    })
    .then(data => {
        data.completed = true;
        console.log(data)
    })
