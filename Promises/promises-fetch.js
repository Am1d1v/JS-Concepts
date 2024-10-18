

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
// fetch('https://dummyjson.com/products')
//     .then(data => data.json())
//     .then(({products}) => {
//         fetch(`https://dummyjson.com/products/` + products[0].id)
//         .then(response => {
//             //return 0;
//             return response.json()
//         })
//         .then(data => console.log(data));
//     });


// Reject
// fetch('https://dummyjson.com/productstypo')
//     .then(response => {
//         console.log(response);
//         return response;
//     }, reject => console.log(reject))
//     .then(({products}) => {
//         console.log(products)
//         return fetch(`https://dummyjson.com/productstypo/` + products[0].id)
//     }, error => console.log(error))
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error))
//         .finally(() => console.log('Finally'))


// Throw Errors 
// fetch('https://dummyjson.com/productstypo',)
//     .then(response => {
//        if(!response.ok){
//         throw new Error(`Is error: ${response.status}`)
//        }
//         return response;
//     })
//     .then(({products}) => {
//         console.log(products)
//         return fetch(`https://dummyjson.com/products/` + products[0].id)
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => {
//             const el = document.querySelector('.filter');
//             el.textContent = error.message;
//         })


// Query

function getData(url, errorMessage){
    return fetch(url)
            .then(response => {
                if(!response.ok){
                    const el = document.querySelector('.filter');
                    el.innerHTML = `${errorMessage} StatusCode: ${response.status}`
                    throw Error(`${errorMessage} ${response.status}`)
                }
                return response.json()
            .then(({products}) => {
                const el = document.querySelector('.filter');
                el.innerHTML = `<select>${products.map(prod =>`<option value=${prod.value}>${prod.title}</option>`)}</select>`
            })   
    })
}
getData('https://dummyjson.com/productss', 'Wrong URL')

// fetch('https://dummyjson.com/products')
//     .then(response => {
//        if(!response.ok){
//         throw new Error(`Is error: ${response.status}`)
//        }
//        return response.json();
//     })
//     .then(({products}) => {
//         console.log(products)
//         return fetch(`https://dummyjson.com/products/` + products[0].id)
//     })
//         .then(response => response.json())
//         .catch(error => {
//             const el = document.querySelector('.filter');
//             el.textContent = error.message;
//         })