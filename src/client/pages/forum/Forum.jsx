import Post from "./Post";
import { useState, useEffect } from "react";
import "../../styles/forum.css";
import PostForm from "./forms/PostForm";
import { FORUM_URL } from "../../config";

const Forum = (props) => {
	const { user } = props;
	const [posts, setPosts] = useState([]);
	const [showForm, setShowForm] = useState(false);
	const [newComment, setNewComment] = useState({});

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(FORUM_URL.POST);
			const allData = await res.json();
			const copyPosts = allData.data.slice(0,10);
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
