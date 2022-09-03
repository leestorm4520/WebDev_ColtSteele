const mongoose=require('mongoose');
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

const userSchema=mongoose.Schema({
    first:String,
    last:String,
    addresses:[
        {
            street:String,
            city:String,
            state:String,
            country:{
                type:String,
                required:true
            }
        }
    ]
})

const User=mongoose.model('User',userSchema);

const makeUser=async()=>{
    const u=new User({
        first:'Harry',
        last:'Potter'
    })
    u.addresses.push({
        street:'123 Porkchop Ave',
        city:'Morgol',
        state:'Ilsidur',
        country:'Middle Earth'
    })
    const res= await u.save()
    console.log(res)
}

makeUser()
