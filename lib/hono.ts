import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";
import { getToken } from "./getToken";
import { cache } from "react";

export const getClient = cache(async () => {
	const authToken = await getToken();

	const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});

	return client;
});

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);
