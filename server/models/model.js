const mongoose = require('mongoose');

// mongoose.connect("mongodb://127.0.0.1:27017/notedb", {useNewUrlParser: true});

const noteSchema = new mongoose.Schema({  
  
  tittle : String,
  content : String,
});

const Notedata = mongoose.model("Note", noteSchema);

module.exports=  Notedata;
