const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');


app.use(methodOverride('_method'));

const Product=require('./models/product');


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Mongo Connection Open!!')
})
.catch(err=>{
    console.log('Error Opening Mongo!!!');
    console.log(err);
})

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));


const categories=['fruit','vegetable','dairy'];

app.get('/products', async(req,res)=>{
    const {category}=req.query;
    let products;
    if(category) products=await Product.find({category});
    else products=await Product.find({products});
    res.render('products/index',{products});
})

app.get('/products/new',(req,res)=>{
    res.render('products/new',{categories})
})

app.post('/products',async (req,res)=>{
    const newProduct=new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/show`,{product});
})

app.get('/products/:id', async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    console.log(product);
    res.render('products/show',{product})
})


app.get('/products/:id/edit', async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render('products/edit', {product, categories})
})

app.put('/products/:id', async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id',async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000,()=>{
    console.log('Listen on 3000!');
})
