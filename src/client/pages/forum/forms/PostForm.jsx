import {useState} from 'react';

const PostForm = () => {
	const [tags, setTags] = useState([]);

	return (
		<form className="create-post-form">
			<input type="text" placeholder="Title" />
			<textarea placeholder="Text" className="post-form-textarea"></textarea>

			<select className="create-post-category">
				<option value="">Categories</option>
				<option value="Gaming">Gaming</option>
				<option value="Fan-Fiction">Fan-Fiction</option>
				<option value="Cosplay">Cosplay</option>
				<option value="Manga">Manga</option>
				<option value="Tv/Film">Tv/Film</option>
			</select>

			<div className="tag-container">
				<input type="text" id="tag" placeholder="Tag" value={}/>
				<button onClick={}>Add</button>
				<ul className="tag-list">
					<li>#sdff</li>
					<li>#dfsdff</li>
				</ul>
			</div>

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