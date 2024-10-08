function fetchDate(callback){
    setTimeout(()=>{
        callback("Data recived!");
    },10000);
}

console.log('Fetching data');

fetchDate((data)=>{
    console.log(data);
})

console.log("other code running");