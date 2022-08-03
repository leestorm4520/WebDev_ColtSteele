const express=require('express');
const app=express();

//built-in middleware to handle json callbacks
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('getpost.html');
})

app.get('/work',(req,res)=>{
    res.send('hello get');
})
app.post('/work',(req,res)=>{
    console.log(req.body);
    res.send('hello post')
})

app.listen(3000,()=>{
    console.log('listen on port 3000');
})