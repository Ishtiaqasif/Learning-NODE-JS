const freeMemory = () =>{
let os = require('os');
let freeMemory = os.freemem();
console.log(`Amount of free Memory = ${freeMemory/1024/1024} MB`);
}
const fs = require('fs');

fs.readdir('./', (error,files)=> {
    if (error) {
        console.log(error);}
    else{
        console.log(files);
    }
});