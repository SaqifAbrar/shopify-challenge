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
};
