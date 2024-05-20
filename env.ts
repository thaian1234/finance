import { config } from "dotenv";
import { expand } from "dotenv-expand";

import { ZodError, z } from "zod";

const EnvSchema = z.object({
	DATABASE_URL: z.string().url(),
	NEXT_PUBLIC_APP_URL: z.string().url(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

expand(
	config({
		path: ".env.local",
	})
);

try {
	EnvSchema.parse(process.env);
} catch (error) {
	if (error instanceof ZodError) {
		let message = "Missing required values in .env:\n";
		error.issues.forEach((issue) => {
			message += issue.path[0] + "\n";
		});
		const e = new Error(message);
		e.stack = "";
		throw e;
	} else {
		console.error(error);
	}
}

export default EnvSchema.parse(process.env);
