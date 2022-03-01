import { FaArrowUp, FaArrowDown} from "react-icons/fa";
import { BiCommentDots } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./forms/CommentForm";

const Post = () => {
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
						<h2 className="card-header-title">
							What’s your all time favorite starter Pokémon?
						</h2>
						<p className="card-header-text">
							Based on the basic stage alone, I'm inclined to pick Chikorita
							since it was my original in-game Starter (though I have to admit
							that its anatomy is pretty weird). Oshawott is also up there, and
							Mudkip would get my vote for cutest base Starter.
						</p>
					</div>
					<div className="card-footer">
						<div className="card-user">
							<img
								src="./assets/user.jpg"
								alt="user image"
								className="card-user-img"
							/>
							<span className="card-user-name">
								<span>Posted by</span>
								<Link to="/" className="card-username-link">Akash Raj</Link>
							</span>
							<span className="card-user-time">.12h ago</span>
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
