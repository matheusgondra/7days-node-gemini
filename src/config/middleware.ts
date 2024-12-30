import { Express } from "express";
import { bodyParser } from "../middlewares";

export const setupMiddleware = (app: Express): void => {
	app.use(bodyParser);
};
