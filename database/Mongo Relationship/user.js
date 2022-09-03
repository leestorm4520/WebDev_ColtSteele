const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Mongo Connection Open!!');
})
.catch(err=>{
    console.log('Error Opening Mongo!');
    console.log(err);
})
;

const userSchema=mongoose.Schema({
    first:String,
    last:String,
    address:[
        {
            street:String,
            city:String,
            state:String,
            country:{
                type:String,
                required:true
            }
        }
    ]
})