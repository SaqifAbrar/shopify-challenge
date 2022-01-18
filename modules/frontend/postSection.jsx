import React from "react";
import ApodSection from "./apodSection";
import styles from "./postSection.module.scss";

export default function postSection() {
	return (
		<div className={styles.postsContainer}>
			<div className={styles.postsWrapper}>
				<ApodSection />
			</div>
		</div>
	);
}
