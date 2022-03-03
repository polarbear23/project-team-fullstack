import { useState, useEffect } from 'react';

import Post from './Post';
import PostForm from './forms/PostForm';

import { FORUM_URL } from '../../config';

import '../../styles/forum.css';

const Forum = (props) => {
    const { user } = props;

    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newComment, setNewComment] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(FORUM_URL.POST);

            const data = await response.json();

			const copyPosts = data.data.slice(0,10);
			
			setPosts(copyPosts);
        };

        fetchPosts();
    }, [newComment]);

    return (
        <div className="forum">
            <div className="create-post-container">
                <button
                    className="create-post-user-btn"
                    onClick={() => setShowForm(!showForm)}
                >
                    Create Post
                </button>
                {showForm && <PostForm posts={posts} setPosts={setPosts} setShowForm={setShowForm}/>}
            </div>
            <div className="forum-list">
                {posts &&
                    posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                setNewComment={setNewComment}
                                user={user}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Forum;
