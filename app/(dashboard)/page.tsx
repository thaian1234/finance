import { notFound } from "next/navigation";
import { OpenModal } from "./open";
import { getAccounts } from "@/services/accounts-service";

export default async function HomePage() {
	const { data } = await getAccounts();

	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
			<OpenModal />
			{/* <AccountData /> */}
		</div>
	);
}
