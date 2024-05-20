import { Header } from "@/components/header";
import { QueryProvider } from "@/providers/query-provider";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="px-3 lg:px-14">
				<QueryProvider>{children}</QueryProvider>
			</main>
		</>
	);
}
