

function getCategories(){
    fetch(`https://dummyjson.com/products/categories`)
    .then(response => response.json())
    .then(data => select(data))
    .catch(error => console.log(`ERROR: ${error}`));
}
getCategories();

function select(arr){
    console.log(arr)
    const el = document.querySelector('.filter');
    el.innerHTML = `<select>${arr.map(arrEl => `<option value=${arrEl.slug}>${arrEl.slug}</option>`)}</select>`};