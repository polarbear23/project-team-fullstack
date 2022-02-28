import React from 'react'

const commentForm = () => {
  return (
		<div className="comment-form-container">
			<form className="comment-form">
				<textarea name="reply" cols="124" rows="8" className="textarea">
					What are your thoughts?
				</textarea>
				<div className="group-btn">
					<button type="button" className="group-btn-cancel">
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