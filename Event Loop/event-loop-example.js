

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => console.log(res));
// console.log(4);
// for (let i = 0; i < 10000000000; i++) {
    
// }


// Promise Creation
const prom = new Promise((resolve, reject) => {
    if(!(new Date() > new Date('31/12/2024'))){
        reject(new Error('Error'));
    }
    resolve('Success');
});
prom.then(data => console.log(data)).catch(e => console.log(e));

function timeout(seconds){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000);
    })
}
timeout(1).then(() =>{
    console.log(1);
    return timeout(1);
})
    .then(() =>{
        console.log(1);
        return timeout(1);
    })
    .then(() =>{
        console.log(1);
        return timeout(1);
    })
    .then(() =>{
        console.log(1);
        return timeout(1);
    })
    .then(() =>{
        console.log(1);
        return timeout(1);
    })

timeout(5).then(() => console.log(5));