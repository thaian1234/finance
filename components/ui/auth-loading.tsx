import Image from "next/image";

export function AuthLoading() {
	return (
		<div className="h-screen flex justify-center items-center bg-background">
			<Image
				src="/logo.svg"
				width={120}
				height={120}
				className="animate-pulse duration-700"
				priority
				sizes="50vw"
				alt="Loading logo"
			/>
		</div>
	);
}
