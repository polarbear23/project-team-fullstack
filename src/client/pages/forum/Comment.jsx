import { useState } from "react";
import { BsSave } from "react-icons/bs";
import {GoReport} from "react-icons/go";
import { FaArrowUp, FaArrowDown, FaShare} from "react-icons/fa";
import {BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import CommentForm from "./forms/CommentForm";
import "../../styles/forum.css";

const Comment = (props) => {
	const { comment, dateDiffInDays, setNewComment, postId} = props;
	const [showCommentChildForm, setShowCommentChildForm] = useState(false);
	const today = new Date();
	const commentDate = new Date(comment.createdAt);

	return (
		<>
			<div className="comment-cards">
				<div className="comment-card-text">
					<div className="comment-card-header">
						<div className="comment-user">
							<img
								src={comment.user.profile.profilePicture}
								alt="user image"
								className="comment-user-img"
							/>
							<span className="comment-user-name">
								<Link to="/">{comment.user.username}</Link>
							</span>
							<span className="comment-user-time">{dateDiffInDays(commentDate,  today)}</span>
						</div>
					</div>
					<div className="comment-card-container">
						<p className="comment-card">{comment.content}</p>
						<div className="card-comment-footer">
							<div className="card-comment-vote">
								<span className="card-vote-up">
									<FaArrowUp />
								</span>
								<span className="card-vote-num">28</span>
								<span className="card-vote-down">
									<FaArrowDown />
								</span>
							</div>
							<p onClick={() => setShowCommentChildForm(!showCommentChildForm)}>
								<span className="comment-icon">
									<BiCommentDetail />
								</span>
								<span>Reply</span>
							</p>
							<p>
								<span className="comment-icon">
									<BsSave />
								</span>
								<span>Save</span>
							</p>
							<p>
								<span className="comment-icon">
									<FaShare />
								</span>
								<span>Share</span>
							</p>
							<p>
								<span className="comment-icon">
									<GoReport />
								</span>
								<span>Report</span>
							</p>
						</div>
					</div>
				</div>
				{/* reply to child comment */}
				{showCommentChildForm && <CommentForm 
					setShowComment={setShowCommentChildForm}
					setNewComment={setNewComment}
					postId={postId}
					commentId={comment.id}
				/>}
				<div className="comment-card-reply">
					{/* <Comment/> */}
				</div>
			</div>
			
		</>
	);
};

export default Comment;
