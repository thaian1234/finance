"use client";

import { AuthLoading } from "@/components/ui/auth-loading";
import { useIsClient } from "@/hooks/use-is-client";
import { ClerkProvider } from "@clerk/nextjs";

export function AuthProvider({
	children,
	...props
}: {
	children: React.ReactNode;
}) {
	const isClient = useIsClient();
	if (!isClient) return <AuthLoading />;

	return <ClerkProvider {...props}>{children}</ClerkProvider>;
}
