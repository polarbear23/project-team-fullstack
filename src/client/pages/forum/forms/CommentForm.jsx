import { useState } from 'react';

import { FETCH_METHOD, LOCAL_STORAGE, FORUM_URL } from '../../../config';

const commentForm = (props) => {
    const { setShowComment, postId, setNewComment, commentId } = props;

    const [comment, setcomment] = useState('');

    const postComment = async (newComment) => {
        try {
            const response = await fetch(FORUM_URL.COMMENT, {
                method: `${FETCH_METHOD.POST}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
                },
                body: JSON.stringify(newComment),
            });

            const data = await response.json();

            setNewComment(data);
        } catch (error) {
            console.log(error);
        }
    };

    const submitFormHandler = (event) => {
        event.preventDefault();

        const newComment = {
            content: comment,
            userId: Number(localStorage.getItem(LOCAL_STORAGE.USER_ID)),
            postId: postId,
            parentId: commentId ? commentId : null,
        };

        postComment(newComment);
    };

    return (
        <div className="comment-form-container">
            <form className="comment-form" onSubmit={submitFormHandler}>
                <textarea
                    name="reply"
                    className="textarea"
                    value={comment}
                    onChange={(event) => setcomment(event.target.value)}
                >
                    Share your thoughts
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
