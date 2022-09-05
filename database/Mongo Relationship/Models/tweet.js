const mongoose=require('mongoose');
const {Schema}=mongoose;
mongoose.connect('mongodb://localhost:27017/relationshipDemo',{
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

const userSchema=new Schema({
    username:String,
    age:Number
})

const tweetSchema=new Schema({
    text:String,
    like:Number,
    user:{type:Schema.Types.ObjectId, ref:'User'}
})

const User=mongoose.model('User',userSchema);
const Tweet=mongoose.model('Tweet',tweetSchema);

const makeTweets= async()=>{
    const u=new User({username:'lalaland123',age:'20'});
    const t1=new Tweet({text:'Lonely, I am so lonely!',like:'100'})
    t1.user=u;
    u.save();
    t1.save();
}

makeTweets();

