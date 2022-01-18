import React from "react";
import styles from "./skeletonCard.module.scss";

export default function PostCard({ image, title, description, date }) {
	return (
		<article className={styles.skeletonContainer}>
			<div className={styles.skeletonImg}></div>
			<div className={styles.skeletonText}>
				<h2></h2>
				<p></p>
				<p></p>
			</div>
		</article>
	);
}
