import express from "express";
import { setupRoutes } from "./routes";
import { setupMiddleware } from "./middleware";

const app = express();
setupMiddleware(app);
setupRoutes(app);

export { app };
