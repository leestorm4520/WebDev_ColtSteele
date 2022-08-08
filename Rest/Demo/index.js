const express=require('express');
const app=express();
const path=require('path');

//built-in middleware to handle json callbacks
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const comments=[
    {
        username:'John',
        comment:'that is boring'
    },
    {
        username:'Tu',
        comment:'that is not too bad'
    },
    {
        username:'Phan',
        comment:'Come on ! it is lit'
    },
    {
        username:'Jashun',
        comment:'What do you mean'
    }
];


app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
    const {username,comment}=req.body;
    comments.push({username,comment});
    res.redirect('/comments');
})

app.listen(3000,()=>{
    console.log('listen on port 3000');
})

/*
Name    Path                Verb    Purpose
Index   /comments           GET     Display all comments
New     /comments/new       GET     Form to create new comment
Create  /comments           POST    Create new comment on server
Show    /comments/:id       GET     Details for one specific comment
Edit    /comments/:id/edit  GET     Form to edit specific comment
Update  /comments/:id       PATCH   Update specfic comment on server
Destroy /comments/:id       DELETE  Delete specific item on sever


*/