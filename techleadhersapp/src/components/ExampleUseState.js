import React from "react";
import { useState } from "react";

const ExampleUseState = () => {

        const [color,setColor]=useState("Red");
        const [msg,setMsg]=useState("");

        const changeColor = () => {
            setColor("yellow")
        }

        const handleChange = (event) => {
            const userFavColor = event.target.value;
            setColor(userFavColor);
        }

        const checkColor = () => {
            var message="";
            if(color==="red"||color==="blue"){
                message= color + " is a primary color";
            }
            else{
                message= color + " is not a primary color";
            }
            setMsg(message)
        };

        return(
        <div>
            <div>
            <label>Enter your fav color: </label>
            <input type="text" value={color} onChange={handleChange}></input>
            </div> <br/>
             Your fav color is: {color}
             <div>
                <button onClick={changeColor}>Change Color</button>
                <button onClick={checkColor}>Check Color</button>
             </div>
             {msg}
        </div>
        )
}
export default ExampleUseState;