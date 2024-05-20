// drizzle.config.ts
import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({
	path: ".env.local",
});

export default defineConfig({
	dialect: "postgresql", // "mysql" | "sqlite"
	out: "./db",
	schema: "./db/schema/*",

	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
	verbose: true,
	strict: true,
});
