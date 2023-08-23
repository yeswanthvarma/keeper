import React from "react";
import Card from "./card";
import axios from "axios";

function Note(props){

    //  function deletenote(){
    //  props.delete(props.id, props.heading);
      const deletenote = async () => {
         try {
          props.delete(props.id, props.heading);
           const head = props.heading

            const response = await axios.delete(`http://localhost:5050/deletenote/${head}`);
            console.log(response.data);
         } catch (error) {
            console.error(error);
         }
      };



  //    const Data = {
  //     heading: props.heading  
  //   }

  //   console.log(Data);


  
  // axios.delete("http://localhost:5050/deletenote/${id}",  Data);


    



    return (
    <div className="note">
     <Card 
   heading= {props.heading}
   note= {props.note}
   />
  <button onClick = {deletenote}>DELETE</button>   
    </div>
    );
}

export default Note;