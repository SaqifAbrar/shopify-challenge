import axios from "axios";
//import { inventory } from "../../../utils/database";
import dbConnect, { inventory } from "../../../utils/dbConnect";

{
	/* 
    Due to time constraints, I could not add a proper database, but with the
    API design in mind, it would be here where we attempt to connect to a
    database like MongoDB 
  */
	//dbConnect();
}
dbConnect();
{
	/* 
    For future tasks such as being able to selectively choose warehouses,
    the current inventory folder under api can be nested in an inventory folder
    which is where you would put the dbConnect() function. This folder structure
    allows for a more flexible & scalable approach and expandability for API routes
  */
}

export default async function handler(req, res) {
	const { method, body } = req;

	//try catches allow for error logging for future (using SENTRY, custom loggers, etc.)
	//you can add query parameters to limit the scope of data retrieval here as well!
	switch (method) {
		case "GET":
			try {
				/* getting items from database, fake API returns all values, not user updated values */
				const items = await axios
					.get("https://fakestoreapi.com/products")
					.then((res) => res.data);

				res.status(200).json(inventory);
			} catch (e) {
				res.status(400).json({
					sucess: false,
					message: "Failed to get item information",
					error: e,
				});
			}
			break;
		case "POST":
			try {
				//console.log(inventory);
				if (Object.keys(body).length === 0) {
					throw "api/inventory/index: Could not find item information";
				}

				/* pushing to database, fake API doesn't do anything, just returns the item being pushed if valid *
        /* new ID will be generated in newItem */
				const newItem = await axios
					.post("https://fakestoreapi.com/products", body)
					.then((res) => res.data);

				res.status(200).send(newItem);
			} catch (e) {
				res.status(400).json({
					sucess: false,
					message: "Failed to add item information",
					error: e,
				});
			}
			break;
		default:
			res.status(400).json({ sucess: false });
	}
}
