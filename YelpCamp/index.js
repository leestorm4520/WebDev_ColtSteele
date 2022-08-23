const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const Campground=require('./models/campground');
const { resolveSoa } = require('dns');

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

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Database connected');
})

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('home');
})

//Show all camps
app.get('/campgrounds',async (req,res)=>{
    const campgrounds=await Campground.find({});
    res.render('campgrounds/index',{campgrounds});
})

//Show the form to create new camp
app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new');
})
//Create a new camp on the server
app.post('/campgrounds', async (req,res)=>{
    const newCamp=new Campground(req.body.campground);
    await newCamp.save();
    res.redirect(`/campgrounds/${newCamp._id}`);
})

//Show a specific camp
app.get('/campgrounds/:id',async (req,res)=>{
    const {id}=req.params;
    const campground= await Campground.findById(id);
    res.render('campgrounds/show',{campground});
})


//Show the form to edit an existing camp
app.get('/campgrounds/:id/edit', async (req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findById(id);
    res.render('campgrounds/edit', {campground});
})

//Edit a specific camp on the server
app.put('/campgrounds/:id', async (req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findByIdAndUpdate(id,req.body,{runValidators:true, new:true});
    req.redirect(`/campgrounds/${campground._id}`);
})

//Delete an existing camp
app.delete('/campgrounds/:id',async (req,res)=>{
    const {id}=req.params;
    const campground=await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

app.listen(3000,()=>{
    console.log('Server on port 3000');
})