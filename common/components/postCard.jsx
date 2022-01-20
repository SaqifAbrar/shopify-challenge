import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./postCard.module.scss";

export default function PostCard({ image, hdImage, title, description, date }) {
	const [liked, setLiked] = useState(false);

	const onLike = () => {
		setLiked((likedState) => !likedState);
	};

	/* useEffect can be used here to determine if post
	was liked previously and then can use setLiked */
	return (
		<article className={styles.postContainer}>
			<div className={styles.imgContainer}>
				<a href={hdImage} target='_blank' rel='noreferrer'>
					<Image
						src={image}
						width={100}
						height={100}
						layout='responsive'
						alt={title}
					/>
				</a>
			</div>
			<div className={styles.contentContainer}>
				<div className={styles.textContainer}>
					<h2>{title}</h2>
					<p>
						<b>{date}</b>
					</p>
					<p>{description}</p>
				</div>
				<div
					className={`${styles.heartContainer} ${liked ? styles.liked : ""}`}
					onClick={onLike}
				>
					<FontAwesomeIcon icon={faHeart} />
					<p>
						<b>Like</b>
					</p>
				</div>
			</div>
		</article>
	);
}
