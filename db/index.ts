import env from "@/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema/index";

export const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, {
	schema: schema,
});
