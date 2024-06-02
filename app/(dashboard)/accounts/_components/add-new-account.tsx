"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/hooks/use-new-account";
import { Plus } from "lucide-react";

export function AddNewAccount() {
	const { onOpen } = useNewAccount();
	return (
		<Button size={"sm"} onClick={onOpen}>
			<Plus className="size-5 mr-2" />
			Add new
		</Button>
	);
}
