// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import env from "./env";

export default defineConfig({
	dialect: "postgresql", // "mysql" | "sqlite"
	out: "./db/migrations",
	schema: "./db/schema/*",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
