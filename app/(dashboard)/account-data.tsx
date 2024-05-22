"use client";

import { getAccounts } from "@/services/accounts-service";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { OpenModal } from "./open";

export function AccountData() {
	const { data, error, isLoading } = useQuery({
		queryKey: ["accounts"],
		queryFn: getAccounts,
	});

	if (isLoading) return <p>Account loading</p>;

	return (
		<div>
			{data?.data.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
			{/* <OpenModal /> */}
		</div>
	);
}
