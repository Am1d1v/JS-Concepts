

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
async function getPosition(){
    let longitude;
    let latitude;
    
    navigator.geolocation.getCurrentPosition((pos) => {
       longitude = pos.coords.latitude;
       latitude = pos.coords.longitude
    });
    
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`).then(response => response.json());
    console.log(response.city)
}
getPosition();
