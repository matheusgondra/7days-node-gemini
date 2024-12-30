import { AddTemplateController } from "../controllers";
import { Controller } from "../interfaces";
import { InMemoryTemplateRepository } from "../repositories";
import { AddTemplateService } from "../services";
import { AddTemplateValidator } from "../validators";

export const makeAddTemplateController = (): Controller => {
	const validation = new AddTemplateValidator();
	const repository = new InMemoryTemplateRepository();
	const service = new AddTemplateService(repository);
	return new AddTemplateController(validation, service);
};
