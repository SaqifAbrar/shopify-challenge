import React from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
	return (
		<div className={styles.sidebarContainer}>
			<div className='sideBar-wrapper'>
				<a href='/posts'></a>
				<a href='/features'></a>
			</div>
		</div>
	);
}
