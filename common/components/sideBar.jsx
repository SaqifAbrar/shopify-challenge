import Link from "next/link";
import React from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar() {
	return (
		<div className={styles.sidebarContainer}>
			<div className='sideBar-wrapper'>
				<h1>Spacetagram</h1>
				<nav>
					<ul>
						<li>
							<Link href='/frontend/posts'>Posts</Link>
						</li>
						<li>
							<Link href='/frontend/features'>Features</Link>
						</li>
						<li>
							<Link href='/'>&larr; Back</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
