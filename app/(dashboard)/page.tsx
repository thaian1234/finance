import { notFound } from "next/navigation";
import { OpenModal } from "./open";
import { getAccounts } from "@/services/accounts-service";
import { AccountData } from "./account-data";
import { Suspense } from "react";

export default async function HomePage() {
	const { data } = await getAccounts();

	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
			<OpenModal />
			<Suspense fallback={<p>Loading from Account data...</p>}>
				<AccountData />
			</Suspense>
		</div>
	);
}
