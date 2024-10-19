

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
function getMyCoordinates(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({coords}) => 
            resolve({
                latitude: coords.latitude,
                longitude: coords.longitude
            }))
    });
}

async function getPosition(){
    try {
        const {latitude, longitude} = await getMyCoordinates();
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`).then(response => response.json());
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}
getPosition();
