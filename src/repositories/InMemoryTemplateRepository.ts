import { Template } from "../entities/Template";
import { TemplateRepository } from "./TemplateRepository";

export class InMemoryTemplateRepository implements TemplateRepository {
	private readonly templates: Template[] = [];

	async add(id: string, title: string, content: string): Promise<Template> {
		const template = new Template(id, title, content);
		this.templates.push(template);
		return template;
	}
}
