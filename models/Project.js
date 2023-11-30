const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
   
    name:{
        type:String,
        default:''
    },
    images:[],
    gold:{
        type:Number,
        default:5
    },
})

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
