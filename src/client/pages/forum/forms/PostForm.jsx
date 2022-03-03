import Tag from "../Tag";
import {useState} from "react";
import Category from "../Category";

const PostForm = (props) => {
	const { posts, setPosts } = props;
	const [tags, setTags] = useState([]);
	const [categories, setCategories] = useState([]);
	const [newPost, setNewPost] = useState({
		title: '',
		content: '',
	});

	const changeHandler = (e) => {
		const name = e.target.name;
        const value = e.target.value;
        setNewPost({...newPost, [name]: value});
		if(name === 'Gaming' || name === 'Fan-Fiction' || name === 'Cosplay' || name === 'Manga' || name === 'Tv/Film'){
			setCategories([...categories, name])
		}
	}

	const submitNewPostHandler = (e) => {
		e.preventDefault();
		fetchNewPost();
	}

	const fetchNewPost = async () => {
		const res = await fetch("http://localhost:4000/post",{
			method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
					Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NDYxNTY2MTR9.c6DDmPlGdWxZv98r48teXiKRR7qx7P8hZ_MrrniStII",
				},
				body: JSON.stringify({
					title: newPost.title,
					content: newPost.content,
					categories,
					tags,
					// userId: user.id
					userId: 1
				}),
		})
		const data = await res.json();
		setPosts([...posts, data.data]);
		console.log('post',data);
	}

	return (
		<form className="create-post-form" onSubmit={submitNewPostHandler}>
			<input 
				type="text" 
				placeholder="Title"
				name="title"
				value={newPost.title}
				onChange={changeHandler}
			 />
			<textarea 
				placeholder="Text"
				name="content" 
				className="post-form-textarea"
				value={newPost.content}
				onChange={changeHandler}
			></textarea>

			<Category changeHandler={changeHandler}/>

			<Tag tags={tags} setTags={setTags}/>
			
			<div className="group-post-btn">
				<button type="button" className="save-post-btn">
					Save
				</button>
				<button type="submit" className="submit-post-btn">
					Post
				</button>
			</div>
		</form>
	);
};

export default PostForm