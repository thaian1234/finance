import { getClient } from "@/lib/hono";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getAccounts = cache(async () => {
	const client = await getClient();
	const resp = await client.api.accounts.$get();

	if (!resp.ok) {
		return notFound();
	}

	return resp.json();
});
