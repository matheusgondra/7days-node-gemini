const getEnv = (key: string, required = false): string => {
	const value = process.env[key];
	if (!value && required) {
		throw new Error(`Environment variable ${key} is missing`);
	}

	return value as string;
};

export const env = {
	port: parseInt(getEnv("PORT")) || 3333,
	geminiKey: getEnv("GEMINI_KEY", true)
};
