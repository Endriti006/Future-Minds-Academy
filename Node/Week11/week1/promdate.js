function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("u plotsu premtimi");
        },2000);
    });

}

fetchData().then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error",error);
});