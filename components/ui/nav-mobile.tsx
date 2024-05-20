import { Menu } from "lucide-react";
import { useState } from "react";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";

import { Button } from "./button";
import { useRouter } from "next/navigation";
import { routes } from "../navigation";

export function NavMobile({ pathname }: { pathname: string }) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const onNavigate = (href: string) => {
		router.push(href);
		setIsOpen(false);
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					variant={"outline"}
					size={"sm"}
					className="font-normal bg-white/10 hover:bg-white/20 focus-visible:ring-offset-0 hover:text-white focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition border-none"
				>
					<Menu className="size-4" />
				</Button>
			</SheetTrigger>

			<SheetContent side={"left"} className="px-2">
				<nav className="flex flex-col gap-y-2 pt-6">
					{routes.map((route) => (
						<Button
							variant={
								route.href === pathname ? "secondary" : "ghost"
							}
							key={route.href}
							onClick={() => {
								onNavigate(route.href);
							}}
							className="w-full justify-start"
						>
							{route.label}
						</Button>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
