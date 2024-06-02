import { getAccounts } from "@/features/accounts/api/accounts-service";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export async function Accounts() {
	const accounts = await getAccounts();

	return (
		<div>
			<DataTable columns={columns} data={accounts} filterKey="email" />
		</div>
	);
}
