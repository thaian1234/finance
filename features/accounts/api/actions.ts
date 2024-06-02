"use server";

import { insertAccountSchema } from "@/db/schema/accounts";
import { authedProcedure } from "@/features/auth/api/auth-services";
import { getClient } from "@/lib/hono";
import { revalidatePath } from "next/cache";

export const createAccountAction = authedProcedure
	.createServerAction()
	.input(
		insertAccountSchema.pick({
			name: true,
		})
	)
	.handler(async ({ input }) => {
		try {
			const client = await getClient();
			await client.api.accounts.$post({
				json: input,
			});

			revalidatePath("/accounts");
		} catch (error) {
			throw new Error("Failed to create account");
		}
	});
