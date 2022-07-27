const fs=require("fs");
// console.log(fs);
// fs.mkdir('Dogs',{recursive:true}, (err)=>{
//     console.log("in the callback");
//     if(err) throw err;
// })
const folderName=process.argv[2]||'Project'

// console.log("after the callback");
try{
    fs.mkdirSync(folderName)
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
}
catch(e){
    console.log("gone wrong")
    console.log(e)
}

