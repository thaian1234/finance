import { getAccounts } from "@/services/accounts-service";

export async function AccountData() {
	const { data } = await getAccounts();

	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>from Account data {item.name}</div>
			))}
		</div>
	);
}
