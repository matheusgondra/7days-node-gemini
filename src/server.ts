import express from "express";
import { env } from "./config/env";

const app = express();

app.get("/", (req, res) => {
	res.end("Hello World");
});

app.listen(env.port, () => {
	console.log(`Server is running on http://localhost:${env.port}`);
});
