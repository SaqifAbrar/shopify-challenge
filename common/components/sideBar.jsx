import Link from "next/link";
import React from "react";
import styles from "./sidebar.module.scss";

export default function Sidebar({ header }) {
	return (
		<div className={styles.sidebarContainer}>
			<div className={styles.sidebarWrapper}>
				<h1>{header}</h1>
				<nav>
					<ul>
						<li>
							<a href='https://github.com/SaqifAbrar/shopify-challenge'>
								Github
							</a>
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
