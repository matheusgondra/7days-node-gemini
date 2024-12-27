export interface Prompt {
	execute(prompt: string): Promise<string>;
}
