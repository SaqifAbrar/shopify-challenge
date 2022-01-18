import React from "react";
import Layout from "../../../common/layouts/layout";
import Sidebar from "../../../common/components/sideBar";
import PostSection from "../../../modules/frontend/postSection";

export default function Posts() {
	return <PostSection />;
}

Posts.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
