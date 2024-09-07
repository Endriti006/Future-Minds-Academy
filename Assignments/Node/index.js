const fs =require('fs');
const path = require('path');

const filePath = path.join (__dirname, "texti.txt" );


fs.writeFile(filePath, "Hello World", (err)=>{
    if(err) {
        console.log('Error reading file',err);
        return;
}
console.log('File path:',filePath);

fs.readFile(filePath,'utf8',(err,data)=>{
    if(err){
        console.log('Error reading file:',err);
        return;
    }
    console.log('File content:',data);
});
});

