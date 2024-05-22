import { notFound } from "next/navigation";
import { getToken } from "./getToken";

type FetchArgs = Parameters<typeof fetch>;

type paramerterType = {
	url: FetchArgs[0];
	args?: FetchArgs[1];
};

export async function fetcher<T>({ url, args }: paramerterType) {
	const response = await fetch(url, {
		headers: {
			Authorization: `Bearer ${await getToken()}`,
		},
		...args,
	});

	if (!response.ok) {
		notFound();
	}

	return response.json() as Promise<T>;
}
