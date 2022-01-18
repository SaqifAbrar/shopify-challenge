import Head from "next/head";
import Sidebar from "../components/sideBar";

export default function Layout({ children }) {
	/* main website content here */
	return (
		<>
			<Head>{/* add website meta tags for all pages here */}</Head>
			<div className='website'>
				<Sidebar />
				<main className='default-main'>{children}</main>
			</div>
			<style jsx>{`
				.website {
					display: flex;
					flex-direction: row;
				}

				.default-main {
					width: 70%;
				}
			`}</style>
		</>
	);
}
