const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('common'));
app.use((req,res,next)=>{
    console.log(req.method);
})

app.use((req,res,next)=>{
    console.log('this is my second middleware');
    next();
})
app.use((req,res)=>{
    app.status(404).send('NOT FOUND');
})

app.listen(3003,()=>{
    console.log('Listen on port 3003')
})
