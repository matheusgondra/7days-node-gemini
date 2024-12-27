import { Router } from "express";
import { makeChatController } from "../factories/chat-controller-factory";
import { adaptRoute } from "../helpers/adapters";

const router = Router();

router.post("/chat", adaptRoute(makeChatController()));

export { router };
