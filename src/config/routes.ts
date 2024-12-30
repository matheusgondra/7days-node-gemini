import { Express, Router } from "express";
import { readdirSync } from "node:fs";
import { join } from "node:path";

export const setupRoutes = (app: Express) => {
	const router = Router();
	app.use("/api/v1", router);

	readdirSync(join(__dirname, "../routes")).map(async file => {
		if (!file.endsWith(".map") && file.endsWith(".ts")) {
			(await import(`../routes/${file}`)).default.default(router);
		}
	});
};
