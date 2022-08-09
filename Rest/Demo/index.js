const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');
const {v4: uuid}=require('uuid');
uuid();

//built-in middleware to handle json callbacks

//to parse form data in POST request body
app.use(express.urlencoded({extended:true}));
//to parse incoming JSON in POST request body
app.use(express.json());
//to 'fake' put/patch/delete requests
app.use(methodOverride('_method'));
//to view folders and EJS setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


let comments=[
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


//Display all comments
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments});
});

//Form to create new comment
app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
});

//Create new comment on server
app.post('/comments',(req,res)=>{
    const {username,comment}=req.body; //req.body: user input in web page's body
    comments.push({username,comment, id:uuid()});
    res.redirect('/comments');
})

//Get details for one specific comment
app.get('/comments/:id',(req,res)=>{
    try{
        const {id}=req.params; //req.params: data extracted from url
        const comment=comments.find(c=>c.id===id)
        res.render('comments/show', {comment})
    }
    catch(e){
        console.log(e);
    }

})

//Form to edit one specific comment
app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params;
    const comment=comments.find(c=>c.id===id);
    if(comment) res.render('comments/edit',{comment});
})

//Edit one specific comment
app.patch('/comments/:id',(req,res)=>{
    console.log('hi')
    const {id}=req.params;
    const newCommentText=req.body.comment; //get new text from req.body
    const foundComment=comments.find(c=>c.id===id);
    console.log(newCommentText+' '+foundComment.comment);
    foundComment.comment=newCommentText; //update the comment with the data from req.body
    res.redirect('/comments')
})


//Delete one specific comment
app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params;
    // const comment=comments.find(c=>c.id===id);
    comments= comments.filter(c=>c.id!=id);
    res.redirect('/comments');
})
/*
//Error handler
app.use((req,res,next)=>{
    const err=new Error('Not found');
    err.status=404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status || 500;
    res.status(status);
    res.render('error');
  });
  */

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