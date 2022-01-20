import React, { useEffect, useState } from "react";
import PostCard from "../../common/components/postCard";
import RoverSkeletonSection from "./roverSkeletonSection";
import axios from "axios";

export default function RoverSection() {
	const [posts, setPosts] = useState([]);
	const [newPosts, setNewPosts] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		// prevent race conditions with nested async function
		async function fetchData() {
			const initialPosts = await axios
				.get("/api/nasa/rover/1")
				.then((res) => res.data);
			setPosts(initialPosts);
		}
		fetchData();
	}, []);

	const postsAreEmpty = (checkPosts) => {
		return checkPosts === undefined || checkPosts.length == 0;
	};

	async function handleMorePages() {
		setPage((prevPage) => {
			return prevPage + 1;
		});
		//console.log(page);
		const newPosts = await axios
			.get(`/api/nasa/rover/${page}`)
			.then((res) => res.data);
		//console.log(newPosts);
		setNewPosts(newPosts);
	}

	return (
		<>
			<section className='rover-container'>
				<div className='rover-wrapper'>
					<h1 className='rover-header'>Mars Rover Pictures</h1>
					{postsAreEmpty(posts) ? (
						<RoverSkeletonSection />
					) : (
						posts.map((post) => {
							//console.log(post.camera);
							const { earth_date, img_src, id } = post;
							const { full_name } = post.camera;
							const { name, landing_date, launch_date } = post.rover;
							const explanation = `Landing Date: ${landing_date} || Launch date: ${launch_date}`;

							return (
								<PostCard
									key={id}
									image={img_src}
									description={explanation}
									date={earth_date}
									title={`${name} - ${full_name}`}
								/>
							);
						})
					)}
					{!postsAreEmpty(newPosts) &&
						newPosts.map((post) => {
							const { earth_date, img_src, id } = post;
							const { full_name } = post.camera;
							const { name, landing_date, launch_date } = post.rover;
							const explanation = `Landing Date: ${landing_date} || Launch date: ${launch_date}`;

							return (
								<PostCard
									key={id}
									image={img_src}
									description={explanation}
									date={earth_date}
									title={`${name} - ${full_name}`}
								/>
							);
						})}
					<button className='button-default' onClick={() => handleMorePages()}>
						More Photos &dArr;
					</button>
				</div>
			</section>
			<style jsx>{`
				.rover-wrapper {
					display: flex;
					flex-direction: column;
				}

				.rover-header {
					padding: 5% 0;
					text-align: center;
				}
			`}</style>
		</>
	);
}
