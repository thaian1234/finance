import { getClient } from "@/lib/hono";
import { notFound, redirect } from "next/navigation";
import { cache } from "react";

export const getAccounts = cache(async () => {
	const client = await getClient();
	const resp = await client.api.accounts.$get();

	if (!resp.ok) {
		return redirect("/login");
	}

	return resp.json();
});
