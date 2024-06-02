import { auth } from "@clerk/nextjs/server";
import { createServerAction, createServerActionProcedure } from "zsa";

export const authedProcedure = createServerActionProcedure().handler(() => {
	try {
		const user = auth();

		if (!user) {
			throw "Unauthorized";
		}

		return {
			user,
		};
	} catch (error) {
		throw "Unauthorized";
	}
});
