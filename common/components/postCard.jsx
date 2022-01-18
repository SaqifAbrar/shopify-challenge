import React from "react";
import styles from "./postCard.module.scss";

export default function PostCard(props) {
	console.log(props);
	return (
		<div className={styles.postContainer}>
			<div className={styles.imgContainer}>
				<img src={props.image} alt='' />
			</div>
			<div className='textContainer'></div>
		</div>
	);
}
