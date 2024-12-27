import { Prompt } from "../domain";
import { BadRequestResponse, CreatedResponse, ServerErrorResponse } from "../helpers/responses";
import { Controller, Validation } from "../interfaces";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class ChatController implements Controller {
	constructor(
		private readonly validation: Validation,
		private readonly service: Prompt
	) {}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest.body);
			if (error) {
				return new BadRequestResponse(error);
			}

			const { prompt } = httpRequest.body;
			const response = await this.service.execute(prompt);

			return new CreatedResponse({ message: response });
		} catch (error) {
			return new ServerErrorResponse(error);
		}
	}
}
