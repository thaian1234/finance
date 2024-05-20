"use client";

import { usePathname } from "next/navigation";
import { NavButton } from "./nav-button";
import { useMedia } from "react-use";
import { NavMobile } from "./ui/nav-mobile";

type RoutesType = {
	href: string;
	label: string;
}[];

export const routes: RoutesType = [
	{
		href: "/",
		label: "Overview",
	},
	{
		href: "/transactions",
		label: "Transactions",
	},
	{
		href: "/accounts",
		label: "Accounts",
	},
	{
		href: "/settings",
		label: "Settings",
	},
];

export function Navigation() {
	const isMobile = useMedia("(max-width: 1024px)", false);
	const pathname = usePathname();

	if (isMobile) {
		return (
			<>
				<NavMobile pathname={pathname} />
			</>
		);
	}

	return (
		<nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
			{routes.map((route) => (
				<NavButton
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={pathname === route.href}
				/>
			))}
		</nav>
	);
}
