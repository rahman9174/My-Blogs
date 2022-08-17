const BlogsList = ({blogs,title,handleClick}) => {
    // const blogs = props.list;
    // const title = props.title;
    // const handleClick = props.handleClick;
    return (
        <div>
            <h2>{title}</h2>
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={()=>handleClick(blog.id)}>Delete Blog</button>

                </div>
            ))}
        </div>
      );
}
 
export default BlogsList;
