export default inventoryUpdateDeletion = async (req, res) => {
	const { method } = req;

	//try catches allow for error logging for future (using SENTRY, custom loggers, etc.)
	switch (method) {
		case "PUT":
			try {
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		case "DELETE":
			try {
			} catch (e) {
				res.status(400).json({ status: false });
			}
			break;
		default:
			res.status(400).json({ status: false });
	}
};
