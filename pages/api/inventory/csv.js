function objectHeaderToString(objData) {
	const headerArray = Object.keys(objData);
	return headerArray.join();
}

function objectValuesToString(objData) {
	const infoArray = Object.values(objData);
	return infoArray.join();
}

export default async function handler(req, res) {
	const { body } = req;

	if (typeof body[0] === "undefined") return;

	const newLineURI = "%0A";
	let baseURI = "data:text/csv;charset=utf-8,";

	baseURI += objectHeaderToString(body[1]) + newLineURI;

	body.forEach((item) => {
		baseURI += objectValuesToString(item) + newLineURI;
	});

	res.status(200).send(JSON.stringify(baseURI));
}
