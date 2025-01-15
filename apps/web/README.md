# Smartsale Webapp

## Tech

- [Next.js](https://nextjs.org) 14.
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com).
  - [Radix UI](https://radix-ui.com) for headless component primitives.
- [Supabase](https://supabase.io) for user authentication and data storage.
- [Tailwind CSS](https://tailwindcss.com) for styling.
- [clsx](https://github.com/lukeed/clsx) utility for conditional class names.
- [CVA](https://cva.style/docs) Class Variance Authority is used for TailwindCSS variants on components (when applicable).
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI.

## Running locally

Make sure to have your `.env` file set up with the following:

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
bun install
bun dev
```

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to our APIs and tools.

## Conventions

We follow standard NextJS conventions and utilize the Cursor.so AI editor to enhance our development speed. Our code style guidelines are detailed in the [.cursorrules](./.cursorrules) file.

1. **Utilize the NextJS app router for state changes**: Prioritize using the App Router for state changes through SSR and hydration. Server actions should be a secondary option. For instance, use URL parameters and SSR for pagination, filtering, sorting, etc.

2. **Focus on Web Vitals**: The most critical metrics are LCP, CLS, and FID. Learn more about [Web Vitals](https://web.dev/articles/vitals) and [NextJS: Core Web Vitals](https://nextjs.org/learn-pages-router/seo/web-performance). This site employs Static Site Generation for all pages to enhance initial load time.

3. **Minimize 'use client' usage**: Use 'use client' only when absolutely necessary. Server components are the default in NextJS 14. Use Next.js app router parameters to fetch data via SSR features and allow Next.js to hydrate the React view. Avoid using 'use client' for data fetching and state setting, as it can disrupt the application's view state and prevent component hydration by the Next.js app router. Reserve 'use client' for Web APIs like the camera, and ensure it is within small components like buttons or icons. Refer to the [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns), [Rendering](https://nextjs.org/docs/app/building-your-application/rendering), and [Routing](https://nextjs.org/docs/app/building-your-application/routing) guides for more information. See https://chatgpt.com/share/7c0e8a2a-049f-4acc-947e-2d99ef3d64f5
