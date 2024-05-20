import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export function AuthUserButton() {
	return (
		<>
			<ClerkLoaded>
				<UserButton />
			</ClerkLoaded>
			<ClerkLoading>
				<Loader2 className="size-6 animate-spin text-muted-foreground text-white" />
			</ClerkLoading>
		</>
	);
}
