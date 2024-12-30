import { z } from "zod";
import { BaseValidator } from "./BaseValidator";

export class ChatValidator extends BaseValidator {
	protected readonly schema = z.object({
		prompt: z.string().min(5).max(100)
	});
}
