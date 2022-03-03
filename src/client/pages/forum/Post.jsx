import { FaArrowUp, FaArrowDown} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./forms/CommentForm";
import {GoReport} from "react-icons/go";
import {BiCommentDetail } from "react-icons/bi";
import "../../styles/forum.css";


const Post = (props) => {
	const { post, setNewComment, user} = props;
	const [showCommentParentForm, setShowCommentParentForm] = useState(false);
	const [showAllComments, setShowAllComments] = useState(false);

	const today = new Date();
	const postDate = new Date(post.createdAt);


	const dateDiffInDays = (a, b) => {
		const day = 1000 * 60 * 60 * 24;
		const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours());
		const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate(), b.getHours());
		const showDay = Math.floor((utc2 - utc1) / day);
		if(showDay < 24){
			return `.${Math.abs(utc2 - utc1) / 36e5}hr. ago`;
		}
		return `.${Math.floor((utc2 - utc1) / day)}day ago`;
	}

	
	const commentStyle = {fontSize: '1.3rem'};
	
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
							<span className="card-user-time">{dateDiffInDays(postDate, today)}</span>
							<span 
								className="card-user-show"
								onClick={() => setShowAllComments(!showAllComments)}
							>Show comments</span>
						</div>
						<div className="card-comment">
							<span className="card-comment-icon">
								<BiCommentDetail
									style={commentStyle}
									onClick={() => setShowCommentParentForm(!showCommentParentForm)}
								/>
								Reply
							</span>
							<span>{post.comment.length} comments</span>
						</div>
					</div>
				</div>
			</div>
			{/* comment form */}
			{showCommentParentForm && <CommentForm 
				setShowComment={setShowCommentParentForm}
				postId={post.id}
				setNewComment={setNewComment}
				user={user}
			/>}

			{/* comment */}
			{showAllComments && post.comment && post.comment.map((cm, index) => {
				return <Comment 
					key={index} 
					comment={cm}
					postId={post.id}
					dateDiffInDays={dateDiffInDays}
					setNewComment={setNewComment}
					padding={padding}
				/>
			})}
		</div>
	);
};

export default Post;
