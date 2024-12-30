import z from "zod";
import { BaseValidator } from "./BaseValidator";

export class AddTemplateValidator extends BaseValidator {
	protected readonly schema = z.object({
		title: z.string().min(5).max(100),
		content: z.string().min(5).max(1000)
	});
}
