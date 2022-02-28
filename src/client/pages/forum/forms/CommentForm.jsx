import { useState} from 'react';

const commentForm = (props) => {
	const { setShowComment } = props;

  	return (
		<div className="comment-form-container">
			<form className="comment-form">
				<textarea name="reply" className="textarea">
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