import { Template } from "../entities/Template";

export interface TemplateRepository {
	add(id: string, title: string, content: string): Promise<Template>;
}
