"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/hooks/use-new-account";
import { getAccounts } from "@/services/accounts-service";
import { useQuery } from "@tanstack/react-query";

export function OpenModal() {
	const { onOpen } = useNewAccount();

	return (
		<div>
			<Button onClick={onOpen}>OpenModal</Button>
		</div>
	);
}
