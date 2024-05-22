import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client, getClient } from "@/lib/hono";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
type RequestType = InferRequestType<typeof client.api.accounts.$post>["json"];

export const useCreateAccountV2 = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const mutation = (json: RequestType) => {
		startTransition(async () => {
			const clientHono = await getClient();

			clientHono.api.accounts
				.$post({ json })
				.then(() => {
					router.refresh();
					toast.success("Create account successfully");
				})
				.catch(() => {
					toast.error("Failed to create account");
				});
		});
	};

	return { isPending, mutation };
};
