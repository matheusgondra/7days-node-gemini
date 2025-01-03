import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../config/env";
import { Prompt } from "../domain";

export class GeminiService implements Prompt {
	private readonly model;
	private readonly genAI;

	constructor() {
		this.genAI = new GoogleGenerativeAI(env.geminiKey);
		this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
	}

	async execute(prompt: string): Promise<string> {
		const response = await this.model.generateContent(prompt);
		return response.response.text();
	}
}
