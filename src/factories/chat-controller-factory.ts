import { ChatController } from "../controllers/ChatController";
import { Controller } from "../interfaces/controller";
import { GeminiService } from "../services/GeminiService";
import { ChatValidator } from "../validators/ChatValidator";

export const makeChatController = (): Controller => {
	const validation = new ChatValidator();
	const service = new GeminiService();
	return new ChatController(validation, service);
};
