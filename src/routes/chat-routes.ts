import { Router } from "express";
import { makeChatController } from "../factories/chat-controller-factory";
import { adaptRoute } from "../helpers/adapters";

export const chatRoutes = (router: Router): void => {
	router.post("/chat", adaptRoute(makeChatController()));
};
