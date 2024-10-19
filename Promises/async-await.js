

async function getProducts(){
    try {
        const response = await fetch(`https://dummyjson.com/productss`);
        if(response.ok){
            const {products} = await response.json()
            const specificProduct = await products[0];
            console.log(specificProduct);
        } else {
            throw new Error('Error Message');
        }
        
    } catch (error) {
        console.error(error);
    }
}
getProducts();
