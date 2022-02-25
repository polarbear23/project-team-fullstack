import { FaArrowUp, FaArrowDown, FaShare} from "react-icons/fa";
import { BiCommentDots, BiCommentDetail } from "react-icons/bi";
import { BsSave } from "react-icons/bs";
import {GoReport} from "react-icons/go";
import { Link } from "react-router-dom";

const Post = () => {
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
								Posted by
								<Link to="/">Akash Raj</Link>
							</span>
							<span className="card-user-time">.12h ago</span>
						</div>
						<div className="card-comment">
							<span className="card-comment-icon">
								<BiCommentDots />
							</span>
							<span>50+</span>
						</div>
					</div>
				</div>
			</div>
			{/* first commments */}
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
							I'm already annoyed with Hop, he's a more annoying version of
							Hau.I did my first.. I guess it's called Max Raid?.. with my
							longcat Meowth. My team hasn't changed, I haven't invested much
							time in the game yet. I think I put more time into Community Day
							than I have the game so far.
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
            {/* second comment */}
			<div className="comment-cards">
				<div className="comment-card-text">
					<div className="comment-card-header">
						<div className="comment-user">
							<img
								src="./assets/pokemon4.jpg"
								alt="user image"
								className="comment-user-img"
							/>
							<span className="comment-user-name">
								<Link to="/">techitisJ</Link>
							</span>
							<span className="comment-user-time">.7h ago</span>
						</div>
					</div>
					<div className="comment-card-container">
						<p className="comment-card">
							I'm already annoyed with Hop, he's a more annoying version of
							Hau.I did my first.. I guess it's called Max Raid?.. with my
							longcat Meowth. My team hasn't changed, I haven't invested much
							time in the game yet. I think I put more time into Community Day
							than I have the game so far.
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
		</div>
	);
};

export default Post;
