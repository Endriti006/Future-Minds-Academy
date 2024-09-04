const eventEmitter = require('events');
const fs =require("fs");

const myEmiter = new eventEmitter();

function writeFile(title, data){
    fs.writeFileSync(`${title}.txt`,data,'utf8',(error)=>{
        if(err){
            console.error("Diqka spo bon");
            return;
        }
        console.log("file written successfully");
    });
}

myEmiter.on("krijofile",()=>{
    console.log("Po krijojm nje file");
    writeFile("bota","sillet rreth diellit")
});

myEmiter.emit("krijofile");