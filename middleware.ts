import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: [
        '/',
        '/about_us',
        '/projects',
        '/school',
        '/shop',
        '/shopEn',
        '/donation',
        '/products/:id',
        '/productsEn/:id',
        '/blog',
        '/blogEn',
        '/posts/:id',
        '/postsEn/:id',
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
