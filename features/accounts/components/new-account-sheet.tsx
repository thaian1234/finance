import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useNewAccount } from "../../../hooks/use-new-account";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/db/schema/accounts";
import { z } from "zod";

export function NewAccountSheet() {
	const { isOpen, onClose } = useNewAccount();

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent className="space-y-4">
				<SheetHeader>
					<SheetTitle>New Account</SheetTitle>
					<SheetDescription>
						Create a new account to track your transactions.
					</SheetDescription>
				</SheetHeader>
				<AccountForm />
			</SheetContent>
		</Sheet>
	);
}
