import React from "react";

const Example1 = () => {

    const participants = ["Shreya", "Trisha","Jyoti"];

    const GirlOne={name:"trisha",gender:"female",age:21}
    const {name,gender,age}=GirlOne;


    return (
    <div> 
        Example of Map:
        <hr/>
        {participants.map((item,index) => {
        return <div>{index} {item} </div>
        })}
        <hr/>
        {gender} <br></br> {age}
        </div>
        );
    };

    export default Example1;    