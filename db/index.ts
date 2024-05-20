import env from "@/env";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql);
