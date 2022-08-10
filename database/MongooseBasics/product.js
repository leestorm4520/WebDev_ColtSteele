const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Connection Open!!')
})
.catch(err=>{
    console.log('Error!!!');
    console.log(err);
})

const productSchema=new mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number,
    }

})