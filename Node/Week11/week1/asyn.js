function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("u plotsu premtimi");
        },2000);
    });

}

async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("u plotsu premtimi");
        },2000);
    });

}

const response =await getData();
console.log("Response",response)