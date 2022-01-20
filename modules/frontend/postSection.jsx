import React from "react";
import ApodSection from "./apodSection";
import styles from "./postSection.module.scss";
import RoverSection from "./roverSection";

export default function postSection() {
	return (
		<div className={styles.postsContainer}>
			<div className={styles.postsWrapper}>
				<ApodSection />
				<RoverSection />
			</div>
		</div>
	);
}
