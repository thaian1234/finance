import { Header } from "@/components/header";

import { SheetProvider } from "@/providers/sheet-provider";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="px-3 lg:px-14">
				<SheetProvider />
				{children}
			</main>
		</>
	);
}
