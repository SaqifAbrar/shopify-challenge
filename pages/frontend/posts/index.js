import React from "react";
import Layout from "../../../common/layouts/layout";
import Sidebar from "../../../common/components/sideBar";
import PostSection from "../../../modules/frontend/postSection";
import { ApodContext } from "../../../modules/frontend/contexts/apodContext";
import axios from "axios";

export default function Posts({ apodData }) {
	return <PostSection />;
}
{
	/**		<ApodContext.Provider value={apodData}>
			<PostSection />
		</ApodContext.Provider> */
}
/*
export async function getServerSideProps(context) {
	const apiKey = process.env.NASA_API;
	const apodData = await axios.get(
		`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
	);
	console.log("DATA: ", apodData.data);
	return { props: { apodData: apodData.data } };
}*/

Posts.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
