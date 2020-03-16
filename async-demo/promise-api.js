const p1 = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async 1...');
        resolve(1)}, 2000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout( ()=> {
        console.log('Async 2...');
        reject(2)}, 2000)
});

// Promise.all([p1, p2])
// .then((res) => console.log(res))
// .catch(err => console.log('Error', err.message));

Promise.race([p1, p2])
.then(res => console.log(res))
.catch(err => console.log('Error', err.message));