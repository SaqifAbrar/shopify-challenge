import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../../common/components/postCard";

export default function ApodSection() {
	const [post, setPost] = useState({});

	useEffect(() => {
		/* prevent race conditions with nested async function */
		async function fetchData() {
			const apodPost = await axios
				.get("/api/nasa/apod")
				.then((res) => res.data);
			setPost(apodPost);
			//console.log(posts.current);
		}
		fetchData();
	}, []);

	const { date, explanation, hdurl, title, url } = post;

	return (
		<section className='apod-container'>
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
		</section>
	);
}
