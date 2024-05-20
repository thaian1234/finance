import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
	return (
		<div>
			<UserButton afterSignOutUrl="/" />
			<Button>Test</Button>
		</div>
	);
}
