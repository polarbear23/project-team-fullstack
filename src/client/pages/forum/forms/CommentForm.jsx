import { useState } from "react";

import { LOCAL_STORAGE, FORUM_URL } from '../../../config';
import { SERVER_ERROR } from '../../../../server/config';

const commentForm = (props) => {
	const { setShowComment, postId, setNewComment, commentId} = props;
	const [comment, setcomment] = useState("");

	const postComment = async () => {
		try {
			const res = await fetch(FORUM_URL.COMMENT, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": localStorage.getItem(LOCAL_STORAGE.TOKEN),
				},
				body: JSON.stringify({
					content: comment,
					userId: Number(localStorage.getItem(LOCAL_STORAGE.USER_ID)),
					postId,
					parentId: commentId ? commentId : "",
				}),
			});
			const data = await res.json();
			setNewComment(data);
		} catch (e) {
			console.log(SERVER_ERROR.UNAUTHORIZED);
		}
	};

	const submitFormHandler = (e) => {
		e.preventDefault();
		postComment();
	};

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
};

export default commentForm;
