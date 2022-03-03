import Post from "./Post";
import { useState, useEffect } from "react";


const Forum = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('http://localhost:4000/post')
            const allData = await res.json()
            setPosts(allData.data)
        }
        fetchPosts()
    }, []);
    
    console.log(posts);

	return (
        <div className="forum">
            {posts && posts.map((post, index) => {
                return <Post key={index} post={post}/>
            })}
        </div>
	);
};

export default Forum;
