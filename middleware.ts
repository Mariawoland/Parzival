import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/about_us',
        '/projects',
        '/school',
        '/seminar',
        '/workshop',
        '/garden',
        '/ridetherapy',
        '/shop',
        '/shopEn',
        '/donation',
        '/products/:id',
        '/blog',
        '/posts/:id',
        '/api/webhook/clerk',
        '/api/uploadthing'
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/uploadthing'
    ]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
