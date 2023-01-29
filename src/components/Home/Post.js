import React from "react";
import "./BlogListing.css";
import FullPage from "./FullPage";
const Post = ({ data }) => {
	return (
		<>
			<div className="hello">
				{data.map((curr) => (
					<FullPage post={curr} />
				))}
			</div>
		</>
	);
};

export default Post;
