import { Router } from "express";
import { chatRoutes } from "./chat-routes";
import { templateRoutes } from "./template-routes";

const router = Router();

chatRoutes(router);
templateRoutes(router);

export { router };
