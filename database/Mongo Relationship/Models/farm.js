const mongoose=require('mongoose');
const {Schema}=mongoose;
mongoose.connect('mongodb://localhost:27017/relationshipDemo',{
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

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    season:{
        type: String,
        enum:['Spring','Summer','Fall','Winter']
    }
});

const Product=mongoose.model('Product',productSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ])

// const farmSchema=new mongoose.Schema({
//     name:String,
//     city:String,
//     products:[{type:Schema.Types.ObjectId, ref:'Product'}]
// })
// const Farm=mongoose.model('Farm',farmSchema);

// const makeFarm=async()=>{
//     const farm=new Farm({name:'Alamo Ranch',city:'San Antonio'})
//     const melon=await Product.findOne({name: 'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save()
//     console.log(farm);
// }
// makeFarm();
