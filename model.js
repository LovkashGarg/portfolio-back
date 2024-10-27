const mongoose=require('mongoose');

const contactmeForm=new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now()
    }
}
)

const contact=mongoose.model('contact',contactmeForm);
module.exports=contact;