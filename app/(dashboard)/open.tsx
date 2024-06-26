"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/hooks/use-new-account";

export function OpenModal() {
	const { onOpen } = useNewAccount();

	return (
		<div>
			<Button onClick={onOpen}>OpenModal</Button>
		</div>
	);
}
