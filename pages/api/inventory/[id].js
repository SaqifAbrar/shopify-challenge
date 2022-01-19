import axios from "axios";
//import { inventory } from "../../../utils/database";

/* the [id] indicates that the URL path extensions after /inventory */
/* so if /inventory/7 was called, req.method would equal 7 */
export default async function inventoryUpdateDeletion(req, res) {
	const { method, body } = req;
	const { id } = req.query;

	//try catches allow for error logging for future (using SENTRY, custom loggers, etc.)
	switch (method) {
		case "GET":
			try {
				const item = await axios
					.get(`https://fakestoreapi.com/products/${id}`)
					.then((res) => res.data);

				res.status(200).json(item);
			} catch (e) {
				res.status(400).json({
					status: false,
					message: "Failed to get item information",
					error: e,
				});
			}
			break;
		case "PUT":
			try {
				const updatedItem = await axios
					.put(`https://fakestoreapi.com/products/${id}`, body)
					.then((res) => res.data);

				res.status(200).send(updatedItem);
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		case "DELETE":
			try {
				const deletedItem = await axios
					.delete(`https://fakestoreapi.com/products/${id}`)
					.then((res) => res.data);

				res.status(200).send(deletedItem);
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		default:
			res.status(400).json({ status: false });
	}
}
