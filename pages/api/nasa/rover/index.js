import axios from "axios";

const apiKey = process.env.NASA_API;

export default async function apod(req, res) {
	try {
		const apodData = await axios.get(
			`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`,
		);
		res.status(200).json(apodData.data);
	} catch (e) {
		/* You can log errors using the e object */
		res.json(e);
	}
}
