import { client, getClient } from "@/lib/hono";
import { InferRequestType } from "hono";
import { InferResponseType } from "hono";
import { redirect } from "next/navigation";

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];

export const getAccounts = async () => {
	const client = await getClient();
	const resp = await client.api.accounts.$get();

	if (!resp.ok) {
		return redirect("/sign-in");
	}

	return (await resp.json()).data;
};
