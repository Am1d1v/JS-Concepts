

// async function getProducts(){
//     try {
//         const response = await fetch(`https://dummyjson.com/productss`);
//         if(response.ok){
//             const {products} = await response.json()
//             const specificProduct = await products[0];
//             console.log(specificProduct);
//         } else {
//             throw new Error(response.status);
//         }
        
//     } catch (error) {
//         console.error(error);
//     } finally {
//         console.log('Finally Text');
//     }
// }
// getProducts();



// Get current city
// function getMyCoordinates(){
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(({coords}) => 
//             resolve({
//                 latitude: coords.latitude,
//                 longitude: coords.longitude
//             }))
//     });
// }

// async function getPosition(){
//     try {
//         const {latitude, longitude} = await getMyCoordinates();
//         const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`).then(response => response.json());
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }

// }
// getPosition();


// Async Methods
/* class ProductsRepository{
    static async getProducts(){
        const {products} = await fetch('https://dummyjson.com/products').then(data => data.json());
        console.log(products);
    }
}
ProductsRepository.getProducts();


const asyncArrow = async () => {
    const {products} = await fetch('https://dummyjson.com/products').then(data => data.json());
    console.log(products);
}
asyncArrow(); */


// sequential
/* const asyncArrow = async () => {
    try {
        const {products} = await fetch('https://dummyjson.com/products').then(data => data.json());
        return products;
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    console.log(3);
    const res = await asyncArrow();
    console.log(res);
    console.log(4);
})(); */

// parallel
async function getAllProducts(){
    const products = await fetch ('https://dummyjson.com/products');
    return products.json();
}

async function getProductById(id){
    const product = await fetch (`https://dummyjson.com/products/${id}`);
    return product.json();
}

async function main(){
    const {products} = await getAllProducts();
    const all = await Promise.all(products.map(product => getProductById(product.id)))
    console.log(all);
}   
main();