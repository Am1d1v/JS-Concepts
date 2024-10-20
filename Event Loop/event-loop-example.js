

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => console.log(res));
// console.log(4);
// for (let i = 0; i < 10000000000; i++) {
    
// }


// Promise Creation
// const prom = new Promise((resolve, reject) => {
//     if(!(new Date() > new Date('31/12/2024'))){
//         reject(new Error('Error'));
//     }
//     resolve('Success');
// });
// prom.then(data => console.log(data)).catch(e => console.log(e));

// function timeout(seconds){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, seconds * 1000);
//     })
// }
// timeout(1).then(() =>{
//     console.log(1);
//     return timeout(1);
// })
//     .then(() =>{
//         console.log(1);
//         return timeout(1);
//     })
//     .then(() =>{
//         console.log(1);
//         return timeout(1);
//     })
//     .then(() =>{
//         console.log(1);
//         return timeout(1);
//     })
//     .then(() =>{
//         console.log(1);
//         return timeout(1);
//     })

// timeout(5).then(() => console.log(5));


// 

async function getAllProducts(){
    const products = await fetch ('https://dummyjson.com/products');
    return products.json();
}

async function getProductError(){
    const products = await fetch ('https://dummyjsons.com/products');
    return products.json();
}

async function getProductByID(id){
    const products = await fetch ('https://dummyjson.com/products/' + id);
    return products.json();
}


async function main(){
    const result1 = await Promise.all([
        getProductByID(1),
        getProductByID(2),
        getProductByID(3),
        //getProductError()
    ]);
    console.log(result1);

    const result2 = await Promise.allSettled([
        getProductByID(1),
        getProductByID(2),
        getProductByID(3),
        getProductError()
    ]);
    console.log(result2);
}   
main();