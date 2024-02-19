import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosPost = () => {

    const[userid,setuserID]=useState("");
    const [id,setid]=useState("");  
    const [title,settitle]=useState("");
    const [body,setbody]=useState("");
    const [post,setPost]=useState([]);
    const [submit,setSubmit]=useState(false);



    const handleUserID=(event)=>{
        setuserID(event.target.value);
    };

    const handleID=(event)=>{
        setid(event.target.value);
    };

    const handleTitle=(event)=>{
        settitle(event.target.value);
    };

    const handleBody=(event)=>{
        setbody(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts',{
            userid:userid,
            id:id,
            title:title,
            body:body
        })
        .then((response)=>{
            console.log(response.data)
            setPost(response.data)
            setSubmit(true)
        })
        
        .catch((error)=>{
            console.log(error)
        })
    };

    return(
        <div>
            {submit ? <>
            <h1>{post.userid}</h1>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1></>: 
        <form onSubmit={handleSubmit}>
        <div>
            <label>UserID:</label>
            <input type="number" value={userid} onChange={handleUserID}></input>
        </div>
        <div>
            <label>ID:</label>
            <input type="number" value={id} onChange={handleID}></input>
        </div>
        <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={handleTitle}></input>
        </div>
        <div>
            <label>Body:</label>
            <input type="text" value={body} onChange={handleBody}></input>
        </div>
        <div>
        <button type="submit"> Submit</button>
     </div>
    </form>
    }
    </div>
    );
};

export default AxiosPost;