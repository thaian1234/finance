"use client";

import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useIsClient } from "@/hooks/use-is-client";

export const SheetProvider = () => {
	const isClient = useIsClient();
	if (!isClient) return null;

	return (
		<>
			<NewAccountSheet />
		</>
	);
};
