import { Router } from "express";
import { GeminiService } from "../services/GeminiService";

const router = Router();

router.post("/", async (req, res) => {
	const { prompt } = req.body;
	if (!prompt) {
		const status = 400;
		res.status(status).json({ error: "Prompt is required", status });
		return;
	}

	const geminiService = new GeminiService();
	const response = await geminiService.execute(prompt as string);
	res.json({ message: response });
});

export { router };
