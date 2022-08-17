import { useEffect, useState } from "react";

const Demo = () => {
    const [ blogs , setBlogs] = useState(
        [
            {name:"rahman",title:"todays genertion impact the future",id:1},
            {name:"abc",title:"internet is good or bad for study",id:2},
            {name:"shyam",title:"todays genertion impact the future",id:3},
            {name:"radhe",title:"internet is good or bad for study",id:4}
        ]
    );
    const[name,setName] = useState("mario");
 
    const handleClick = (id)=>{
        const newBlogs = blogs.filter((blog)=>blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(()=>{
        console.log("useEffect run...........");
    },[name]);
    const handleName = ()=>{
        setName("rahman");
    }
    return (
        <div>
            <div>
                {
                    blogs.map((blog)=>(
                        <div key={blog.id}>
                            <h1>name : {blog.name}</h1>
                            <p>Title : { blog.title}</p>
                            <button onClick={()=>handleClick(blog.id)}>delete blog</button>
                        </div>
                        
                     ))
                }
                <button onClick={handleName()}>change name </button>
                {name}
            </div>
        </div>
      );
    }

 
export default Demo;