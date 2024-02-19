import React from "react";
import { useState } from "react";

const BasicForm = () => {
    
    const[name,setName]=useState("");
    const [msg,setMsg]=useState("");   
    const [age,setAge]=useState("");    
     
        
    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleAge = (event) => {
        setAge(event.target.value);
    }
        

        const handleSubmit = (event) => {
             event.preventDefault();
    
            var message="";
            if(age >= 18){
                message= "Hello, " + name + " You are eligible to vote.";
            }
            else{
                message= "Hello, " + name + "You are not eligible to vote.";
            }
            setMsg(message)
        };

        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleName}></input>
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={handleAge}></input>
                </div>
                <div>
                <button type="submit"> Submit</button>
             </div>
             {msg}
            </form>
        );
};

export default BasicForm;
