const express=require('express');
const app=express();
const path=require('path');
const {v4: uuid}=require('uuid');
uuid();

//built-in middleware to handle json callbacks
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const comments=[
    {   
        id:uuid(),
        username:'John',
        comment:'that is boring'
    },
    {
        id:uuid(),
        username:'Tu',
        comment:'that is not too bad'
    },
    {
        id:uuid(),
        username:'Phan',
        comment:'Come on ! it is lit'
    },
    {
        id:uuid(),
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
    const {username,comment}=req.body; //req.body: user input in web page's body
    comments.push({username,comment, id:uuid()});
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params; //req.params: data extracted from url
    const comment=comments.find(c=>c.id===id)
    res.render('comments/show', {comment})

})

app.patch('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const newCommentText=req.body.comment;
    const comment=comments.find(c=>c.id===id);
    foundComment.comment=newCommentText;
    res.redirect('/comments')
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
Update  /comments/:id       PATCH   Update specfic comment on server (partially) (put: for complete)
Destroy /comments/:id       DELETE  Delete specific item on sever


*/