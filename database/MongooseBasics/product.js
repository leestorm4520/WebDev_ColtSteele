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
        type:String,
        required:true,
        maxLength:20
    },
    price:{
        type:Number,
        required:true
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0,
        },

        }
    }
});
const Product=mongoose.model('Product',productSchema);
const bike=new Product({name:'Mountain Bike', price:599, categories:['Cycling','Outdoor']});
 bike.save()
 .then(data=>{
    console.log('it works');
    console.log(data);
 })
 .catch(err=>{
    console.log('oh no');
    console.log(err);
 })