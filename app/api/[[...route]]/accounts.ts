import { Hono } from "hono";
import { db } from "@/db";
import { accounts } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { insertAccountSchema } from "@/db/schema/accounts";
import { HTTPException } from "hono/http-exception";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const app = new Hono()
	.use("*", clerkMiddleware())
	.get("/", async (c) => {
		const auth = getAuth(c);
		// const authUser = auth();
		const user = await currentUser();

		console.log(user?.id);

		if (!auth?.userId) {
			return c.json(
				{
					error: "Unauthorized",
				},
				401
			);
			// throw new HTTPException(401, { message: "Unauthorized" });
		}

		const data = await db
			.select({
				id: accounts.id,
				name: accounts.name,
			})
			.from(accounts)
			.where(eq(accounts.userId, auth.userId));

		return c.json({ data });
	})
	.post(
		"/",
		zValidator(
			"json",
			insertAccountSchema.pick({
				name: true,
			})
		),
		async (c) => {
			const auth = getAuth(c);
			const values = c.req.valid("json");

			if (!auth?.userId) {
				return c.json(
					{
						error: "Unauthorized",
					},
					401
				);
			}

			const [data] = await db
				.insert(accounts)
				.values({
					userId: auth.userId,
					...values,
				})
				.returning();

			return c.json({ data });
		}
	);

export default app;
