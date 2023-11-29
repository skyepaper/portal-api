const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
   
    name:{
        type:String,
        default:''
    },
    message:{
        type:String,
        default:''
    }
})

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
