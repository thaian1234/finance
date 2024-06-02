"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { client } from "@/lib/hono";
import { InferResponseType } from "hono";

interface ClientProps {
	accounts: {
		id: string;
		name: string;
	}[];
}

export async function Client({ accounts }: ClientProps) {
	return (
		<DataTable
			columns={columns}
			data={accounts}
			filterKey="email"
			// onDelete={() => {}}
		/>
	);
}
