const express=require('express');
const app=express();
// console.dir(app)
// app.use((req, res)=>{
//     console.log('we got a new request');
//     res.send('Hello, here is your response!');
//     res.send({color:'red'});
// });
app.get('/',(req,res)=>{
    res.send('this is the home page');
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.send(`<h1>Browse ${subreddit}</h1>`)
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit, postId}=req.params;
    res.send(`<h1>Browse ${subreddit} - view ${postId}</h1>`)
})

app.get('/search',(req,res)=>{
    const {q}=req.query;
    if(!q) res.send('nothing send if nothing searched')
    res.send(`Hi there! Search key is ${q}`);
    
})

app.get('/cats',(req,res)=>{
    res.send('meow');

})
app.get('dogs',(req,res)=>{
    res.send('woff');
})

app.get('*',(req,res)=>{
    res.send('no route available')
})

app.listen(8000,()=>{
    console.log('listening on port 8000!')
})