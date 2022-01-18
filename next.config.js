const path = require("path");
module.exports = {
	reactStrictMode: true,
	redirects: async () => {
		return [
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
