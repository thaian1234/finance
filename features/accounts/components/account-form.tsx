"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAccountSchema } from "@/db/schema/accounts";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useNewAccount } from "@/hooks/use-new-account";
import { useServerAction } from "zsa-react";
import { createAccountAction } from "../api/actions";
import { toast } from "sonner";

const formSchema = insertAccountSchema.pick({
	name: true,
});

type FormValues = z.input<typeof formSchema>;

interface AccountFormProps {
	id?: string;
	defaultValues?: FormValues;
	onDelete?: () => void;
}

export function AccountForm({ defaultValues, id, onDelete }: AccountFormProps) {
	const onClose = useNewAccount((state) => state.onClose);
	const { isPending, execute, isError, isSuccess } =
		useServerAction(createAccountAction);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues || { name: "" },
	});

	const handleSubmit = (values: FormValues) => {
		// mutation(values);
		execute(values)
			.then(() => {
				toast.success("Account created");
				onClose();
			})
			.catch(() => {
				toast.error("Failed to create account");
			});
		// onClose();
	};

	const handleDelete = () => {
		onDelete?.();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-4 pt-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input
									disabled={isPending}
									placeholder="e.g. Cash, bank, Creadit Card"
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<Button className="w-full" disabled={isPending} type="submit">
					{id ? "Save changes" : "Create account"}
				</Button>
				{!!id && (
					<Button
						type="button"
						disabled={isPending}
						onClick={handleDelete}
						variant={"outline"}
						className="w-full gap-4"
					>
						<Trash className="size-4" color="red" />
						<p className="">Delete account</p>
					</Button>
				)}
			</form>
		</Form>
	);
}
