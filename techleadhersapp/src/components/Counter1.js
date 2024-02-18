import React, { useEffect, useState } from "react";


const Counter1 = () => {
       
       const [count1,setCount1]=useState(0);
       const [count2,setCount2]=useState(0);
       const [count,setCount]=useState(0);

       useEffect(()=>{
             console.log("count=",count1);
       });

       useEffect(()=>{
        console.log("[]count=",count1);
       }, []);
       
       useEffect(()=>{
        console.log("[count] is",count1%2 === 0? "even" : "odd");
       }, [count1]);

    //    const increaseCount1 = () => {
    //       setCount1(count1+1);
    //    };

    //    const increaseCount2 = () => {
    //     setCount1(count1+5);
    //    };

    //     const increaseCount3 = () => {
    //     setCount1(count1+10);
    //     };


    const increaseCount = (x) => {
        setCount(count+x);
    };

       return(
        <div>Counter value: {count}
        <br/>
        <button onClick={() =>increaseCount(1)}>Increase Count by 1</button>
        <button onClick={() =>increaseCount(5)}>Increase Count by 5</button>
        <button onClick={() =>increaseCount(10)}>Increase Count by 10</button>
        </div>
       );
};

export default Counter1;