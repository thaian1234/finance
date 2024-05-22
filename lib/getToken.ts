"use server";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cache } from "react";

export const getToken = cache(async () => {
	const authToken = await auth().getToken();

	if (!authToken) {
		redirect("/login");
	}

	return authToken;
});
