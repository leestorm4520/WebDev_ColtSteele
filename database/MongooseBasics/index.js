const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Connection Open!!')
})
.catch(err=>{
    console.log('Error!!!');
    console.log(err);
})

const movieSchema=new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
});

const  Movie=mongoose.model('Movie',movieSchema);
const DOFP= new Movie ({title:'X-Men:Day of Future Past', year:2017,score:9.2,rating:'PG-13'});
