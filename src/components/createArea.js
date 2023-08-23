import React from "react";
import axios from "axios";

function CreateArea(props) {
    const [note, setnote]= React.useState({
        tittle:"",
        content: ""
    });

  function submitnote(event){ 
    props.onadd(note);
    event.preventDefault();

    const newnote ={
      tittle:note.tittle,
      content:note.content
    }
    
   axios.post("http://localhost:5050/create", newnote);
    



    setnote({
        tittle:"",
        content: ""
    });


}

function handelchange(event){
    const abc = event.target.value;
    const name = event.target.name;

    setnote(prevNote =>{
       return  {
        ...prevNote,
        [name]: abc
       };
    })
}


  return (
    <div>
      <form>
        <input value = {note.tittle} onChange={handelchange} name="tittle" placeholder="Title" />
        <textarea value = {note.content} onChange={handelchange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick= {submitnote}>Add</button>
        </form>
    </div>
  );
}

export default CreateArea;