const path = require("path");
module.exports = {
	reactStrictMode: true,
	images: {
		loader: "default",
		domains: ["apod.nasa.gov", "mars.nasa.gov"],
	},
	redirects: async () => {
		return [
			{
				source: "/backend",
				destination: "/backend/ims",
				permanent: true,
			},
			{
				source: "/frontend",
				destination: "/frontend/posts",
				permanent: true,
			},
		];
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
		prependData: `@import "_variables.scss";`,
	},
};
