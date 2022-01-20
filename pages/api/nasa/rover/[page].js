import axios from "axios";

const apiKey = process.env.NASA_API;

export default async function apod(req, res) {
	const { page } = req.query;

	try {
		const roverData = await axios
			.get(
				`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-2-19&page=${page}&api_key=${apiKey}`,
			)
			.then((res) => res.data);

		res.status(200).json(roverData.photos);
	} catch (e) {
		/* You can log errors using the e object */
		res.json(e);
	}
}
