import Post from "./Post";
import { useState, useEffect } from "react";
import "../../styles/forum.css";
import PostForm from "./forms/PostForm";

const Forum = (props) => {
    const {user} = props;
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newComment, setNewComment] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('http://localhost:4000/post');
            const allData = await res.json();
            setPosts(allData.data);
        }
        fetchPosts();
    }, [newComment]);
    
    console.log(posts);

	return (
        <div className="forum">
            <div className="create-post-container">
                <button 
                    className="create-post-user-btn" 
                    onClick={() => setShowForm(!showForm)}
                >
                    Create Post
                </button>
                {showForm && <PostForm/>}
                
            </div>
            <div className="forum-list">
                {posts && posts.map((post, index) => {
                        return <Post 
                        key={index} 
                        post={post} 
                        setNewComment={setNewComment}
                        user={user}
                    />
                })}
            </div>
            
        </div>
	);
};

export default Forum;
