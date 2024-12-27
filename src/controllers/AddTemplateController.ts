import { AddTemplate } from "../domain";
import { BadRequestResponse, CreatedResponse, ServerErrorResponse } from "../helpers/responses";
import { Controller, HttpRequest, HttpResponse, Validation } from "../interfaces";

export class AddTemplateController implements Controller {
	constructor(
		private readonly validation: Validation,
		private readonly service: AddTemplate
	) {}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest.body);
			if (error) {
				return new BadRequestResponse(error);
			}

			const { title, content } = httpRequest.body;
			const template = await this.service.execute({ title, content });

			return new CreatedResponse(template);
		} catch (error) {
			return new ServerErrorResponse(error);
		}
	}
}
