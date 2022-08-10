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
        required:true,
        min:[0,'Price must be positive']
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
        },
    size:{
        type:String,
        enum:['S','M','L']
    }
    }
);
productSchema.methods.greet=function(){
    console.log('Hello'+this.name)
}
productSchema.methods.toggleOnSale=function(){
    this.onSale=!this.onSale;
    return this.save();
}

productSchedule.methods.addCategory=function(newCat){
    this.categories.push(newCat);

}

productSchema.statics.fireSale=function(){
    return this.updateMany({},{onSale:true,price:0})
}

const Product=mongoose.model('Product',productSchema);


const bike=new Product({name:'Mountain Bike', price:20, categories:['Cycling','Outdoor']});
// if update, have to include {new:true, runValidators:true}
 bike.save()
 .then(data=>{
    console.log('it works');
    console.log(data);
 })
 .catch(err=>{
    console.log('oh no');
    console.log(err);
 })

 const findProduct=async()=>{
    const foundProduct=await Product.findOne({name:'Mountain Bike'});
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
 }
 findProduct();
 Product.fireSale().then(res=>console.log(res));