import React from "react";
import { useState } from "react";

const Assignment1 = () => {

    const[strInput,setStrInput]=useState("");
    const[list,setList]=useState([]);

    const handleSubmit = (event) => {
            event.preventDefault();
            setList([...list,strInput]);
            setStrInput("");
    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label>Enter the name:</label>
            <input type="text" value={strInput} onChange={((e) => setStrInput(e.target.value) )}/>  
              <p><button type="submit">Add name in the list</button></p> 
        </form>
        <p>The name in the list are:</p>
        <ul>
             {list.map((task,index) => (
                <li key={index}>{task}</li>
             ))}
        </ul>
        </div>
    );
};
export default Assignment1;