import { useState } from "react";
import BlogsList from "./BlogsList";
const Home = () => {
    const [blogs,setBlogs] = useState([
        {title : "My new website", body : 'lorem ipsum...',author : 'mario', id:1},
        {title : "Welcome Party", body : 'lorem ipsum...',author : 'Yoshi', id:2},
        {title : "Web dev top tips", body : 'lorem ipsum...',author : 'mario', id:3}
    ]);

    const handleClick = (id) =>{
        const newBlogs =blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }
    return (
        <>
        <div className="home">
           <BlogsList blogs={blogs} title="All blogs!" handleClick={handleClick}/>
           {/* <BlogsList list={blogs.filter((blog)=>blog.author==='mario')} title="mario's blogs" />
           <BlogsList list={blogs.filter((blog)=>blog.author==='Yoshi')} title="Yoshi's blogs"/> */}
        </div>
        </>
      );
}
 
export default Home;
