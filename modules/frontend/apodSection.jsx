import React, { useEffect, useRef } from "react";
import axios from "axios";
import PostCard from "../../common/components/postCard";

export default function ApodSection() {
	const posts = useRef({});

	useEffect(() => {
		/* prevent race conditions with nested async function */
		async function fetchData() {
			posts.current = await axios.get("/api/nasa/apod").then((res) => res.data);
			//console.log(posts.current);
		}
		fetchData();
	});

	const { date, explanation, hdurl, title, url } = posts.current;

	return (
		<div className='apod-container'>
			{/* */}
			<div className='apod-wrapper'>
				<PostCard
					image={url}
					hdImage={hdurl}
					description={explanation}
					date={date}
					title={title}
				/>
			</div>
		</div>
	);
}
