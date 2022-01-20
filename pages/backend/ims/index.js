import React from "react";
import Layout from "../../../common/layouts/layout";
import IMSSection from "../../../modules/backend/imsSection";

//ims = inventory management system
export default function ims() {
	return <IMSSection />;
}

ims.getLayout = function getLayout(page) {
	return <Layout name={"Inventory Management System"}>{page}</Layout>;
};
