const express=require('express');
const app=express();
const path=require('path');
const redditData=require('./data.json');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data=redditData[subreddit];
    console.log(data);
    res.render('subreddit',{...data});
})

app.get('/cats',(req,res)=>{
    const cat=[a,b,c,d,e,f];
    res.render('cats',{cat});
})

app.get('/rand',(req,res)=>{
    const ranNum=Math.floor(Math.random()*10)+1;
    res.render('random', {ranNum});
})

app.listen(8000,()=>{
    console.log('listen on port 8000');
})
