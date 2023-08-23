import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
 import Note from "./components/note";
import './style.css';
// import Data from "./components/data";
// import Card from "./components/card"; 
// import Addnote from "./components/addnote";
import CreateArea from "./components/createArea";




function App() {
  const [notes, setnotes]= useState([]);

  function addnew(note){
   setnotes(prevnotes=>{
    // const no = new Notedata ({
    //   tittle:String(note.tittle),
    //   content: String(note.content),
      
    // });

    // Notedata.create(no).then(function(){
    //   console.log("succ sign up");

    // }).catch(function(err){
    //   console.log(err)
    // });
   return [...prevnotes, note]; 
   });

  }

  function delnote(ids,heading){
    



   setnotes(prevnotes =>{
   return prevnotes.filter((prev, index)=>
    {return index !== ids;});
  
  
   });
}
    // fetch("http://localhost:5050/deletenote", {
    //    method: "POST",
    //    crossDomain: true,
    //    headers: {
    //      "Content-Type": "application/json",
    //      Accept:"application/json",
    //      "Access-control-Allow-Origin": "*",
    //    },
    //    body: JSON.stringify({
    //     notedelete: heading,
    //    }),
    //  })
    //  .then((res) => res.json())
    //  .catch(error => {
    //    window.alert(error);
    //    return;
    //  });


    
    
   
  


  return (
    <div>
     <Header/>
     {/* <Addnote/> */}
     <CreateArea 
      onadd = {addnew}
     />
     {notes.map((note, index)=>{
      return(
        <Note
          key = {index}
          id = {index}
          delete = {delnote}
          heading = {note.tittle}
          note = {note.content}
        />
      );
     })}
    
     {/* {Data.map(loop)} */}
    
     <Footer/>
    </div>
   
  );

}

export default App;
