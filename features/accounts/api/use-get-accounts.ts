import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "@/services/accounts-service";

export const useGetAccoutns = () => {
	const query = useQuery({
		queryKey: ["accounts"],
		queryFn: getAccounts,
	});

	return query;
};
