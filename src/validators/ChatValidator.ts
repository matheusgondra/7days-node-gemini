import { Validation } from "../interfaces";
import { z } from "zod";
import { ValidationError } from "./errors/ValidationError";

export class ChatValidator implements Validation {
	validate(data: any): null | Error {
		const schema = z.object({
			prompt: z.string().min(5).max(100)
		});

		const result = schema.safeParse(data);
		if (result.success) {
			return null;
		}

		const error = `${result.error.errors[0].path}: ${result.error.errors[0].message}`;
		return new ValidationError(error);
	}
}
