import React, { useEffect, useState } from "react";
import PostCard from "../../common/components/postCard";
import SkeletonCard from "../../common/components/skeletonCard";
import axios from "axios";

export default function ApodSection() {
	const [post, setPost] = useState({});
	//const post = useContext(ApodContext);

	useEffect(() => {
		// prevent race conditions with nested async function
		async function fetchData() {
			const apodPost = await axios
				.get("/api/nasa/apod")
				.then((res) => res.data);
			setPost(apodPost);
			//console.log(posts.current);
		}
		fetchData();
	}, []);

	const postIsEmpty = () => {
		return Object.keys(post).length === 0 && post.constructor === Object;
	};

	const { date, explanation, hdurl, title, url } = post;

	return (
		<>
			<section className='apod-container'>
				<div className='apod-wrapper'>
					<h1 className='apod-header'>Astrology Picture of the Day</h1>
					{/* {<SkeletonCard />} */}
					{/*
						<PostCard
							image={url}
							hdImage={hdurl}
							description={explanation}
							date={date}
							title={title}
						/>
					*/}
					{postIsEmpty() ? (
						<SkeletonCard />
					) : (
						<PostCard
							image={url}
							hdImage={hdurl}
							description={explanation}
							date={date}
							title={title}
						/>
					)}
				</div>
			</section>
			<style jsx>{`
				.apod-header {
					padding: 5% 0;
					text-align: center;
				}
			`}</style>
		</>
	);
}
