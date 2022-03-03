import { useState, useEffect} from 'react';
// import { LOCAL_STORAGE, USER_URL } from '../../../config';

const commentForm = (props) => {
	const { setShowComment, postId, setNewComment, commentId, user } = props;
	const [comment, setcomment] = useState('');
	
	
	const postComment = async() => {
		
		try{
			const res = await fetch("http://localhost:4000/post/comment", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					// Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
				},
				body: JSON.stringify({
					content: comment,
					userId: 1,
					// userId: user.id,
					postId,
					parentId: commentId ? commentId : ''
				}),
			});
			const data = await res.json();
			console.log(data);
			setNewComment(data);
		}
		catch(e){
			console.log('Unuthorize');
		}
		
	}
	
	

	const submitFormHandler = (e) => {
		e.preventDefault();
		postComment();
	}



  	return (
		<div className="comment-form-container">
			<form className="comment-form" onSubmit={submitFormHandler}>
				<textarea 
					name="reply" 
					className="textarea" 
					value={comment} 
					onChange={(e) => setcomment(e.target.value)}
				>
					What are your thoughts?
				</textarea>
				<div className="group-btn">
					<button 
						type="button" 
						className="group-btn-cancel"
						onClick={() => setShowComment(false)}
					>
						Cancel
					</button>
					<button type="submit" className="group-btn-reply">
						Reply
					</button>
				</div>
			</form>
		</div>
	);
}

export default commentForm