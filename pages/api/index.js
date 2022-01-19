// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	res
		.status(200)
		.json({ apiRoutes: ["/nasa/apod", "/inventory", "/inventory/[id]"] });
}
