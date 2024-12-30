import { ZodObject } from "zod";
import { Validation } from "../interfaces";

export abstract class BaseValidator implements Validation {
	protected readonly schema = {} as ZodObject<any>;

	validate(data: any): null | Error {
		const result = this.schema.safeParse(data);
		if (result.success) {
			return null;
		}

		const error = `${result.error.errors[0].path}: ${result.error.errors[0].message}`;
		return new Error(error);
	}
}
