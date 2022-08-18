const express=require('express');
const app=express();
const path=require('path');

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Mongo Connection Open!!')
})
.catch(err=>{
    console.log('Error Opening Mongo!!!');
    console.log(err);
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');




app.listen(3000,()=>{
    console.log('Listen on 3000!');
})