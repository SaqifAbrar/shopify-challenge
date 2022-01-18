import React from "react";
import styles from "./postCard.module.scss";

export default function PostCard({ image, title, description, date }) {
	return (
		<article className={styles.postContainer}>
			<div className={styles.imgContainer}>
				<img src={image} alt='' />
			</div>
			<div className={styles.textContainer}>
				<h2>{title}</h2>
				<p>{date}</p>
				<p>{description}</p>
			</div>
		</article>
	);
}
