import axios from "axios";

/* If there was more time, I would establish the database connection here and validate if app is connected */

export var inventory = [];

export default async function dbConnect() {
	console.log("connecting to db...");

	if (inventory.length !== 0) {
		return;
	}

	try {
		const items = await axios
			.get("https://fakestoreapi.com/products")
			.then((res) => res.data);

		inventory = [...items];
	} catch (e) {
		return {
			status: false,
			message: "Failed to get item information",
			error: e,
		};
	}
}
