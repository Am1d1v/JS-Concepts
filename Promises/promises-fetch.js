

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => {
//         //console.log(data)
//         return data.json();
//     })
//     .then(data => {
//         data.completed = true;
//         //console.log(data)
//     })

// Chaining
fetch('https://dummyjson.com/products')
    .then(data => data.json())
    .then(({products}) => {
        fetch(`https://dummyjson.com/products/` + products[0].id)
        .then(data => data.json())
        .then(data => console.log(data));
    })