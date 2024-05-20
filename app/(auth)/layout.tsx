import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
			<div className="h-full lg:flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-4 pt-16">
					<h1 className="font-bold text-3xl text-[#2E2A47]">
						Welcome back
					</h1>
					<p className="text-base text-[#7E8CA0]">
						Log in or create account to get back top your dashboard
					</p>
				</div>
				<div className="flex items-center justify-center mt-8">
					<ClerkLoaded>{children}</ClerkLoaded>
					<ClerkLoading>
						<Loader2 className="animate-spin size-10 text-muted-foreground" />
					</ClerkLoading>
				</div>
			</div>
			<div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
				<Image src={"/logo.svg"} height={100} width={100} alt="Logo" />
			</div>
		</main>
	);
}
