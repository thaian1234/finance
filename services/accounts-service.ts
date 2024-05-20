import { client } from "@/lib/hono";

export async function getAccounts() {
	const resp = await client.api.accounts.$get();

	if (!resp.ok) {
		throw new Error("Failed to fetch accounts");
	}

	const { data } = await resp.json();

	return data;
}
