import { Template } from "../entities/Template";

export interface TemplateData {
	title: string;
	content: string;
}

export interface AddTemplate {
	execute(data: TemplateData): Promise<Template>;
}
