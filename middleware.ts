// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/accounts(.*)", "/", "/test"]);

// export default clerkMiddleware(
// 	(auth, req) => {
// 		if (isProtectedRoute(req)) auth().protect();
// 	},
// 	{ debug: true }
// );

// export const config = {
// 	matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up", "/api/(.*)"]);

export default clerkMiddleware((auth, request) => {
	if (!isPublicRoute(request)) {
		auth().protect();
	}
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
