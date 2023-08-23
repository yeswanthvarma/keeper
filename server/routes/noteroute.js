const express = require("express");
const Router = express.Router();
const Notedata = require("../models/model");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Router.post("/", async (req, res) => {
//     let newnote = {
//         tittle:req.body.tittle,
//         content:req.body.content
//     };
//     let collection = await Note.collection("note");
//     let result = await collection.insertOne(newnote);
//     res.send(result).status(204);
//   });




Router.route("/create").post((req,res)=>{
    const tittle = req.body.tittle;
    const content = req.body.content;
    const newnote = new Notedata ({
        tittle,
        content
    });
    newnote.save();
});

Router.route("/deletenote/:head").delete((req,res)=>{
    const { head } = req.params;
    console.log(head);
    console.log(req.body.data);
    const heading = req.body.data;
    // const head = heading.tittle;
    // const head = heading.heading;

    Notedata.deleteOne({tittle:head }).then(function(){
        console.log("Blog deleted"); // Success
     }).catch(function(error){
        console.log("fuckman");
        console.log(head);
         // Failure
     });

    

});

module.exports = Router;

// app.post("/deletenote", async (req, res)=>{
    
//     const heading = req.body.dnotes;
//     try{
//         Note.deleteOne({tittle:heading.tittle});

//   }catch(error){
//     console.log(error);
//   }
// });
