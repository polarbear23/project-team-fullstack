import { FaArrowUp, FaArrowDown} from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./forms/CommentForm";


const Post = (props) => {
	const { post } = props;
	const [showCommentParentForm, setShowCommentParentForm] = useState(false);
	const [showAllComments, setShowAllComments] = useState(false);


	const commentStyle = {fontSize: '1.3rem'}
	return (
		<div className="forum-container">
			<div className="card">
				<div className="card-vote">
					<span className="card-vote-up">
						<FaArrowUp />
					</span>
					<span className="card-vote-num">56</span>
					<span className="card-vote-down">
						<FaArrowDown />
					</span>
				</div>
				<div className="card-text">
					<div className="card-header">
						<h2 className="card-header-title">{post.title}</h2>
						<p className="card-header-text">{post.content}</p>
					</div>
					<div className="card-footer">
						<div className="card-user">
							<img
								src={post.user.profile.profilePicture}
								alt="user image"
								className="card-user-img"
							/>
							<span className="card-user-name">
								<span>Posted by</span>
								<Link to="/" className="card-username-link">{post.user.username}</Link>
							</span>
							<span className="card-user-time">{post.createdAt}</span>
							<span 
								className="card-user-show"
								onClick={() => setShowAllComments(!showAllComments)}
							>Show comments</span>
						</div>
						<div className="card-comment">
							<span className="card-comment-icon">
								<BiCommentDots 
									style={commentStyle}
									onClick={() => setShowCommentParentForm(!showCommentParentForm)}
								/>
							</span>
							<span>50+</span>
						</div>
					</div>
				</div>
			</div>
			{/* comment form */}
			{showCommentParentForm && <CommentForm 
				setShowComment={setShowCommentParentForm}
			/>}
			{/* hardcoded for now- needs to change */}
			{/* first commments */}
			{showAllComments && <Comment/>}
            {/* second comment */}
			{showAllComments && <Comment/>}
		</div>
	);
};

export default Post;
