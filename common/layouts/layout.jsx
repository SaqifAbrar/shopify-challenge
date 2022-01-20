import Head from "next/head";
import Sidebar from "../components/sideBar";
import styles from "./layout.module.scss";

export default function Layout({ children, name }) {
	/* main website content here */
	return (
		<>
			<Head>{/* add website meta tags for all pages here */}</Head>
			<div className={styles.website}>
				<Sidebar header={name} />
				<main className={styles.defaultMain}>{children}</main>
			</div>
		</>
	);
}
