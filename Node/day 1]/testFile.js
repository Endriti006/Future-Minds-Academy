const { error } = require("console");
const fs = require("fs");


const data = "hello world";

fs.writeFileSync("example.txt",data,'utf8',(error)=>{
    if(err){
        console.error("Diqka spo bon");
        return;
    }
    console.log("file written successfully");
});