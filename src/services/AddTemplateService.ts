import { v4 as uuid } from "uuid";
import { AddTemplate, TemplateData } from "../domain";
import { Template } from "../entities/Template";
import { TemplateRepository } from "../repositories/TemplateRepository";

export class AddTemplateService implements AddTemplate {
	constructor(private readonly repository: TemplateRepository) {}

	async execute({ title, content }: TemplateData): Promise<Template> {
		const id = uuid();
		const template = await this.repository.add(id, title, content);
		return template;
	}
}
