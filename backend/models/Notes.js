const mongoose = require('mongoose');

const { Schema } = mongoose;

const NotesSchema=new Schema({

   titile:{
        type: String,
        required: true
    },
    description: {
        Type: String,
        required: true,
       
    },
    tag: {
        type:String,
        default:"fds"
    },
    date: {
        type: Date,
        default :Date.now
    }

})

module.exports=mongoose.model('notes',NotesSchema)