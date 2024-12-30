import { ChatController } from "../controllers";
import { Controller } from "../interfaces";
import { GeminiService } from "../services";
import { ChatValidator } from "../validators";

export const makeChatController = (): Controller => {
	const validation = new ChatValidator();
	const service = new GeminiService();
	return new ChatController(validation, service);
};
