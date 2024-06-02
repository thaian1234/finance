import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AddNewAccount } from "./_components/add-new-account";
import { Suspense } from "react";
import { Accounts } from "./_components/accounts";

export default function AccountsPage() {
	// const accounts = await getAccounts();

	return (
		<div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24 z-50">
			<Card className="border-sky-500 drop-shadow-sm">
				<CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
					<CardTitle className="text-xl line-clamp-1">
						Accounts page
					</CardTitle>
					<AddNewAccount />
				</CardHeader>
				<CardContent>
					{/* <DataTable
						columns={columns}
						data={accounts}
						filterKey="email"
						// onDelete={() => {}}
					/> */}
					<Suspense fallback={<p>Loading accounts</p>}>
						<Accounts />
					</Suspense>
				</CardContent>
			</Card>
		</div>
	);
}
