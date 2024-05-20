import { Button } from "@/components/ui/button";
import { getAccounts } from "@/services/accounts-service";
import { QueryClient } from "@tanstack/react-query";

export default async function HomePage() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["posts"],
		queryFn: getAccounts,
	});

	return (
		<div>
			<Button>Test</Button>
		</div>
	);
}
