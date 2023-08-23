
import React, {useState} from "react";
import Data from "./data";



function Addnote(){
    var [tittle, addtittle] = useState("");
    var [content, addcontent] = useState("");
    var [til, tiladd] = useState("");
    var [con, conadd] = useState("");

    function storedata(){
        tiladd(tittle)
        conadd(content)
       
        var newdata = [{
            heaging: til,
            note : con
        }]
         
        Data.push(newdata);

      }
    
      function savetittle(event){
       tittle = event.target.value;
       addtittle(tittle);
       
       
      }
      function savecontent(event){
       content = event.target.value;
       addcontent(content);
       
      }
   
   
   
  

    return (
        
        <div>
        <h1>{til}{con}</h1>
        
        
        <input value={tittle} onChange= {savetittle} placeHolder="Tittle"></input>
        <input value={content} onChange= {savecontent} placeHolder="Take a note"></input>
        <button onClick={storedata}>Add</button>
        
        
        </div>
    );
}

export default Addnote;