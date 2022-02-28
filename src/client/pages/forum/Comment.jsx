import React from "react";
import { BsSave } from "react-icons/bs";
import {GoReport} from "react-icons/go";
import { FaArrowUp, FaArrowDown, FaShare} from "react-icons/fa";
import {BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import CommentForm from "./forms/CommentForm";

const Comment = () => {
	return (
		<>
			<div className="comment-cards">
				<div className="comment-card-text">
					<div className="comment-card-header">
						<div className="comment-user">
							<img
								src="./assets/pokemon3.png"
								alt="user image"
								className="comment-user-img"
							/>
							<span className="comment-user-name">
								<Link to="/">SpinyShell</Link>
							</span>
							<span className="comment-user-time">.3h ago</span>
						</div>
					</div>
					<div className="comment-card-container">
						<p className="comment-card">
							I'm already annoyed with Hop, he's a more annoying version of Hau.I
							did my first.. I guess it's called Max Raid?.. with my longcat
							Meowth. My team hasn't changed, I haven't invested much time in the
							game yet. I think I put more time into Community Day than I have the
							game so far.
						</p>
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
							<p>
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
			</div>
			{/* reply to child comment */}
			<CommentForm/>
		</>
	);
};

export default Comment;
