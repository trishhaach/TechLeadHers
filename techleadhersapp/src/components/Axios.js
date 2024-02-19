import React, { useEffect, useState } from "react";
import axios from "axios";
const AxiosExample = () => {

    const[posts,setPosts] = useState([]);
    const[postsFlag,setPostsFlag]=useState(false);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
          
        .then((response)=>{
            console.log(response.data)
            setPosts(response.data)
            setPostsFlag(true)
        })
        
        .catch((error)=>{
            console.log(error)
        })

    },[])
    

    return(
        <div>
            {postsFlag? <p>post</p>:<p>loading...</p>}
            <table>
            <thead>
                <th>UserID</th> 
                <th>ID</th>
                <th>Body</th>
            </thead>
            
                {posts.map((item,index) => (         
                     <tr key={index}>
                     <td>{item.userId}</td>
                     <td>{item.id}</td>
                     <td>{item.body}</td>
                     </tr>
                     ))}

            </table>
        </div>
    );
};

export default AxiosExample;