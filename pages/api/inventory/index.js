{
	/* 
    Due to time constraints, I could not add a proper database, but with the
    API design in mind, it would be here where we attempt to connect to a
    database like MongoDB 
  */
	//dbConnect();
}

{
	/* 
    For future tasks such as being able to selectively choose warehouses,
    the current inventory folder under api can be nested in an inventory folder
    which is where you would put the dbConnect() function. This folder structure
    allows for a more flexible & scalable approach 
  */
}

export default inventoryViewAddition = async (req, res) => {
	const { method } = req;

	//try catches allow for error logging for future (using SENTRY, custom loggers, etc.)
	switch (method) {
		case "GET":
			try {
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		case "POST":
			try {
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		default:
			res.status(400).json({ status: false });
	}
};
