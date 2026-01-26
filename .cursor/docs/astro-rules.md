# CLAUDE.md

This file provides comprehensive guidance to Claude Code when working with Astro 5+ applications and the Islands Architecture.

## Core Development Philosophy

### DRY (Don't Repeat yourself)

Avoid code duplication by extracting common patterns into reusable components, utilities, or functions. When the same logic appears in multiple places, refactor it into a shared location. This reduces maintenance burden and ensures consistency across the codebase.

### KISS (Keep It Simple, Stupid)

Simplicity should be a key goal in design. Choose straightforward solutions over complex ones whenever possible. Simple solutions are easier to understand, maintain, and debug.

### YAGNI (You Aren't Gonna Need It)

Avoid building functionality on speculation. Implement features only when they are needed, not when you anticipate they might be useful in the future.

### Design Principles

<!-- TODO: React by default -->
- **Islands Architecture**: Ship minimal JavaScript, hydrate only what needs interactivity
- **Performance by Default**: Static-first with selective hydration for optimal performance
- **React First**: Prefer React for interactive components when framework islands are needed
- **Content-Driven**: Optimized for content-heavy websites with type-safe content management
- **Zero JavaScript by Default**: Only ship JavaScript when explicitly needed

## 🤖 AI Assistant Guidelines

### Context Awareness

- When implementing features, always check existing patterns first
- Prefer static generation over client-side rendering when possible
- Use framework-specific components only when interactivity is required
- Check for similar functionality across different framework integrations
- Understand when to use `.astro` vs framework components

### Common Pitfalls to Avoid

- Over-hydrating components that could be static
- Mixing multiple frameworks unnecessarily in single components
- Ignoring Astro's partial hydration benefits
- Creating duplicate functionality across different framework islands
- Overwriting existing integrations without checking alternatives

### Workflow Patterns

- Use "think hard" for hydration strategy decisions
- Break complex interactive components into smaller, focused islands
- Prefer React for interactive components when a framework is needed
- Validate framework choice and hydration requirements before implementation

### Search Command Requirements

<!-- TODO: Beyond my knowledge -->
**CRITICAL**: Always use `rg` (ripgrep) instead of traditional `grep` and `find` commands:

```bash
# ❌ Don't use grep
grep -r "pattern" .

# ✅ Use rg instead
rg "pattern"

# ❌ Don't use find with name
find . -name "*.ts"

# ✅ Use rg with file filtering
rg --files | rg "\.ts$"
# or
rg --files -g "*.ts"
```

**Enforcement Rules:**

```
(
    r"^grep\b(?!.*\|)",
    "Use 'rg' (ripgrep) instead of 'grep' for better performance and features",
),
(
    r"^find\s+\S+\s+-name\b",
    "Use 'rg --files | rg pattern' or 'rg --files -g pattern' instead of 'find -name' for better performance",
),
```

## 🧱 Code Structure & Modularity

### File and Component Limits

- **Never create a file longer than 500 lines of code.** If approaching this limit, refactor by splitting into modules or helper components.
- **Astro components should be under 200 lines** for better maintainability.
- **Functions should be short and focused sub 50 lines** and have a single responsibility.
- **Organize code by feature and framework**, keeping related components together.

## 🚀 Astro 5+ Key Features

### Content Layer (New in Astro 5)

- **Flexible Content Management**: Load content from any source (files, APIs, CMSs)
- **Type-Safe Content**: Automatic TypeScript types for all content collections
- **Performance Boost**: Up to 5x faster builds for Markdown, 2x for MDX
- **Unified API**: Single interface for all content sources

```typescript
// content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

### Server Islands (New in Astro 5)

- **Mixed Static/Dynamic Content**: Combine cached static content with personalized dynamic content
- **Independent Loading**: Each island loads separately for optimal performance
- **Custom Caching**: Set custom cache headers and fallback content per island

```astro
---
// components/PersonalizedContent.astro
export const prerender = false; // Server island
---

<div>
  <h2>Welcome back, {Astro.locals.user?.name}!</h2>
  <p>Your personalized content here...</p>
</div>
```

<!-- TODO: is this section(tokens*) neccesary for our usecase? -->
### Environment Configuration (astro:env)

- **Type-Safe Environment Variables**: Validation and TypeScript support
- **Runtime Validation**: Automatic validation at build time
- **Client/Server Separation**: Clear distinction between public and private variables

```typescript
// env.d.ts
import { defineEnv, envField } from "astro:env/config";

export default defineEnv({
  server: {
    DATABASE_URL: envField.string({ context: "server", access: "secret" }),
    API_SECRET: envField.string({ context: "server", access: "secret" }),
  },
  client: {
    PUBLIC_API_URL: envField.string({ context: "client", access: "public" }),
    PUBLIC_SITE_NAME: envField.string({ context: "client", access: "public" }),
  },
});
```

## 🏗️ Project Structure (Islands Architecture)
<!-- TODO: structure based on cloudcannon astro starter - does this better belong there? -->
```
src/
├── components/            # Astro components (.astro)
│   ├── building-blocks/  # Core component library
│   │   ├── core-elements/ # Basic elements (image, button, etc.)
│   │   ├── forms/        # Form components
│   │   └── wrappers/     # Container components (card, section, etc.)
│   ├── navigation/       # Navigation components
│   │   ├── footer/      # Footer components
│   │   ├── main-nav/    # Main navigation
│   │   ├── mobile/      # Mobile navigation
│   │   └── side/        # Sidebar navigation
│   ├── page-sections/   # Page-level components
│   │   ├── builders/    # Builder components
│   │   ├── ctas/        # Call-to-action sections
│   │   ├── features/    # Feature sections
│   │   ├── heroes/      # Hero sections
│   │   ├── info-blocks/ # Information blocks
│   │   └── people/      # People/team sections
│   └── utils/           # Component utilities
├── component-library/   # Component documentation system
│   ├── components/      # Documentation components
│   ├── content/         # Component documentation (markdown)
│   ├── layouts/         # Documentation layouts
│   └── styles/          # Documentation styles
├── content/             # Content collections
│   ├── config.ts       # Content configuration with glob loaders
│   ├── pages/          # Page content (markdown)
│   └── blog/           # Blog posts (mdx)
├── pages/              # File-based routing (REQUIRED)
│   ├── blog/           # Blog pages
│   ├── component-library/ # Component library pages
│   └── [...slug].astro # Dynamic routes
├── layouts/            # Layout components
│   ├── BaseLayout.astro
│   └── Page.astro
├── styles/             # Global styles (PostCSS)
│   ├── main.css        # Main entry point
│   ├── style.pcss      # Component styles
│   ├── _base.pcss      # Base styles
│   ├── _reset.pcss     # CSS reset
│   ├── _theme.pcss     # Theme variables
│   └── _variables.pcss # CSS custom properties
├── assets/             # Processed assets (images, etc.)
├── data/               # Static data files (JSON)
└── icons/              # SVG icon files
```

## 🎯 TypeScript Configuration (STRICT REQUIREMENTS)

### MUST Follow Astro TypeScript Templates

```json
{
  "extends": "astro/tsconfigs/strict",
  "include": [".astro/types.d.ts", "**/*"],
  "exclude": ["dist"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/layouts/*": ["src/layouts/*"],
      "@/content/*": ["src/content/*"]
    },
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### MANDATORY Type Requirements

- **NEVER use `any` type** - use `unknown` if type is truly unknown
- **MUST use explicit type imports** with `import type { }` syntax
- **MUST define props interfaces** for all Astro components
- **MUST use Astro's built-in types** like `HTMLAttributes`, `ComponentProps`
- **MUST validate content with Zod schemas** in content collections

### Component Props Typing (MANDATORY)

```typescript
// Astro component props
export interface Props {
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  class?: string;
}

const { title, description, image, class: className } = Astro.props;
```

## 📦 Package Management & Dependencies

### MUST Use pnpm (MANDATORY)
<!-- TODO: are we defaulting to pnpm for all projects? -->
<!-- TODO: verify install commands with pnpm vs npx -->
**CRITICAL**: Always use pnpm for Astro projects for better performance and dependency management.

```bash
# Install pnpm globally
npm install -g pnpm
# or
curl -fsSL https://get.pnpm.io/install.sh | sh

# Project setup
pnpm create astro@latest
pnpm install
pnpm dev
```

### Essential Astro 5 Dependencies

```json
{
  "dependencies": {
    "astro": "^5.16.0",
    "@astrojs/mdx": "^4.3.0",
    "@astrojs/sitemap": "^3.5.0",
    "@astrojs/react": "^4.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@tailwindcss/postcss": "^4.1.0",
    "tailwindcss": "^4.1.0",
    "zod": "^4.0.0",
    "typescript": "^5.6.0"
  },
  "devDependencies": {
    "prettier": "^3.6.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

### Framework Integrations (React Preferred)

**PREFER React** for interactive components. Only add other frameworks if there's a specific need.

```bash
# React integration (PREFERRED)
pnpm astro add react
# or
npx astro add react

# Only add other frameworks if specifically needed
# Vue integration
pnpm astro add vue

# Svelte integration
pnpm astro add svelte
```

### Essential Integrations

```bash
# Styling - Tailwind CSS v4 (PostCSS plugin)
pnpm install -D @tailwindcss/postcss tailwindcss

# MDX support
pnpm astro add mdx

# Performance and SEO
pnpm astro add sitemap

# Manual package installation when needed
pnpm install package-name
pnpm install -D dev-package-name
```

## 🛡️ Data Validation with Zod (MANDATORY FOR CONTENT)

### Content Collections (REQUIRED Pattern)

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  author: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
  }),
});

const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
  sidebar: z
    .object({
      order: z.number(),
      label: z.string().optional(),
    })
    .optional(),
});

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: blogSchema,
  }),
  docs: defineCollection({
    type: "content",
    schema: docsSchema,
  }),
};

export type BlogPost = z.infer<typeof blogSchema>;
export type DocsPage = z.infer<typeof docsSchema>;
```

### API Route Validation

```typescript
// src/pages/api/newsletter.ts
import type { APIRoute } from "astro";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const validatedData = subscribeSchema.parse(data);

    // Process subscription
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          error: "Validation failed",
          details: error.errors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
```

## 🎨 Component Guidelines (ASTRO-SPECIFIC)

### Astro Component Structure (MANDATORY)
```astro
---
// src/components/BlogCard.astro
export interface Props {
  title: string;
  description: string;
  pubDate: Date;
  image?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  href: string;
}

const {
  title,
  description,
  pubDate,
  image,
  tags = [],
  href
} = Astro.props;

// Server-side logic here
const formattedDate = pubDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
---

<article class="blog-card">
  {image && (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      decoding="async"
    />
  )}

  <div class="content">
    <h3>
      <a href={href}>{title}</a>
    </h3>
    <p>{description}</p>

    <div class="meta">
      <time datetime={pubDate.toISOString()}>
        {formattedDate}
      </time>

      {tags.length > 0 && (
        <ul class="tags">
          {tags.map((tag) => (
            <li class="tag">{tag}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
</article>

<!-- TODO: let's discuss this inline style pattern & how it relates to our tailwind usage -->
<style>
  .blog-card {
    /* Component-scoped styles */
    border: 1px solid var(--color-border);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .blog-card:hover {
    transform: translateY(-2px);
  }

  .content {
    padding: 1rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .tag {
    background: var(--color-accent);
    color: var(--color-accent-text);
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>
```

### Framework Component Integration

```astro
---
// src/components/InteractiveCounter.astro
export interface Props {
  initialCount?: number;
  maxCount?: number;
}

const { initialCount = 0, maxCount = 100 } = Astro.props;
---

<!-- Static wrapper with framework island -->
<div class="counter-wrapper">
  <h3>Interactive Counter</h3>

  <!-- React island with hydration directive -->
  <Counter
    client:load
    initialCount={initialCount}
    maxCount={maxCount}
  />
</div>

<style>
  .counter-wrapper {
    border: 2px solid var(--color-primary);
    padding: 1rem;
    border-radius: 8px;
  }
</style>
```

### Hydration Directives (CRITICAL UNDERSTANDING)

```astro
<!-- Load immediately -->
<Component client:load />

<!-- Load when component becomes visible -->
<Component client:visible />

<!-- Load when browser is idle -->
<Component client:idle />

<!-- Load on media query match -->
<Component client:media="(max-width: 768px)" />

<!-- Render only on client (no SSR) -->
<Component client:only="react" />
```

## 🔄 Content Management Patterns

### Content Collection Usage with Glob Loaders

```astro
---
// src/pages/blog/[...slug].astro
import { type CollectionEntry, getCollection } from 'astro:content';
import BlogLayout from '../../layouts/BlogLayout.astro';

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.id.replace(/\.mdx?$/, '') },
    props: post,
  }));
}

type Props = CollectionEntry<'blog'>;

const post = Astro.props;
const { Content } = await post.render();
---

<BlogLayout
  title={post.data.title}
  description={post.data.description}
  pubDate={post.data.pubDate}
  heroImage={post.data.heroImage}
>
  <Content />
</BlogLayout>
```

### Dynamic Content Loading

```typescript
// src/lib/content.ts
import { getCollection, type CollectionEntry } from "astro:content";

export async function getBlogPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog");

  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByTag(
  tag: string,
): Promise<CollectionEntry<"blog">[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
}

export async function getFeaturedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.data.featured).slice(0, 3);
}
```

## 🚀 Performance Optimization (ASTRO-SPECIFIC)

### Image Optimization (MANDATORY)
<!-- TODO: let's discuss ~width & height -->
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Optimized images with Astro -->
<Image
  src={heroImage}
  alt="Hero image description"
  width={800}
  height={400}
  format="webp"
  quality={80}
  loading="eager"
/>

<!-- Responsive images -->
<Image
  src={heroImage}
  alt="Responsive hero"
  widths={[400, 800, 1200]}
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  format="webp"
/>
```

### Bundle Optimization

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  build: {
    inlineStylesheets: "auto",
    splitting: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            utils: ["./src/components/utils"],
          },
        },
      },
    },
  },
});
```

### Server Islands for Performance

```astro
---
// src/components/DynamicContent.astro
export const prerender = false; // Mark as server island

// This runs on the server for each request
const userPreferences = await getUserPreferences(Astro.locals.userId);
const recommendations = await getRecommendations(userPreferences);
---

<section class="dynamic-content">
  <h2>Recommended for you</h2>
  <div class="recommendations">
    {recommendations.map((item) => (
      <div class="recommendation-card">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
</section>

<style>
  .dynamic-content {
    /* Styles for dynamic content */
  }
</style>
```

## 🔐 Security Requirements (MANDATORY)

### Environment Variables (MUST VALIDATE)
<!-- TODO: is this use case aplicable to what we do? -->
```typescript
// src/env.d.ts
import { envField, defineEnv } from "astro:env/config";

export default defineEnv({
  server: {
    DATABASE_URL: envField.string({
      context: "server",
      access: "secret",
      min: 1,
    }),
    API_SECRET_KEY: envField.string({
      context: "server",
      access: "secret",
      min: 32,
    }),
  },
  client: {
    PUBLIC_SITE_URL: envField.string({
      context: "client",
      access: "public",
    }),
    PUBLIC_ANALYTICS_ID: envField.string({
      context: "client",
      access: "public",
    }),
  },
});
```
<!-- TODO: relevant? -->
### Content Security Policy
```astro
---
// src/layouts/BaseLayout.astro
export interface Props {
  title: string;
  description: string;
}

const { title, description } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="description" content={description} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
  <title>{title}</title>
</head>
<body>
  <slot />
</body>
</html>
```

## 💅 Code Style & Quality

### Astro Configuration (MANDATORY)

```typescript
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
```

### Tailwind CSS v4 Configuration (PostCSS)

**IMPORTANT**: This project uses Tailwind CSS v4 with PostCSS plugin, not the Astro integration.

```css
/* src/styles/main.css */
@import "tailwindcss";
@import "./style.pcss";
```

```javascript
// postcss.config.cjs
module.exports = {
  plugins: [require("@tailwindcss/postcss")],
};
```

No `tailwind.config.js` needed - Tailwind v4 uses CSS-first configuration.

### Prettier Configuration

```json
{
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ],
  "astroAllowShorthand": false
}
```

## 📋 Development Commands

### pnpm Scripts (MANDATORY)

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "check": "astro check",
    "sync": "astro sync",
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext .js,.ts,.astro --max-warnings 0",
    "format": "prettier --write \"src/**/*.{astro,js,ts,md,json}\"",
    "format:check": "prettier --check \"src/**/*.{astro,js,ts,md,json}\"",
    "validate": "pnpm run check && pnpm run lint && pnpm run test:coverage"
  }
}
```

### Command Reference

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm run check        # TypeScript and Astro validation
pnpm run lint         # ESLint with zero warnings
pnpm run format       # Format code with Prettier
pnpm run validate     # Run all quality checks

# Testing
pnpm test             # Run tests
pnpm run test:coverage # Run tests with coverage

# Package Management
pnpm install          # Install dependencies
pnpm add package      # Add runtime dependency
pnpm add -D package   # Add dev dependency
pnpm update           # Update dependencies
pnpm audit            # Security audit
pnpm list             # List installed packages
pnpm outdated         # Check for outdated packages
```

## ⚠️ CRITICAL GUIDELINES (MUST FOLLOW ALL)

1. **PREFER React** - Use React for interactive components when a framework is needed
2. **ENFORCE TypeScript strict mode** - Use `astro/tsconfigs/strict` template
3. **VALIDATE all content with Zod** - Content collections MUST have schemas
4. **MUST understand hydration strategy** - Use appropriate client directives
5. **MAXIMUM 500 lines per file** - Split large components
6. **MUST use semantic imports** - `import type` for type-only imports
7. **MUST optimize images** - Use Astro's Image component
8. **MUST validate environment variables** - Use astro:env for type safety
9. **NEVER over-hydrate** - Default to static, hydrate only when needed
10. **MUST use framework components sparingly** - Prefer Astro components for static content
11. **MUST pass astro check** - Zero TypeScript errors required
12. **USE Tailwind CSS v4** - Configure via PostCSS plugin, not Astro integration

## 📋 Pre-commit Checklist (MUST COMPLETE ALL)

- [ ] `astro check` passes with ZERO errors
- [ ] Content collections have proper Zod schemas
- [ ] Components use appropriate hydration directives
- [ ] Images are optimized with Astro's Image component
- [ ] Environment variables are properly typed with astro:env
- [ ] No unnecessary framework components (static content uses .astro)
- [ ] React preferred for interactive components when framework is needed
- [ ] TypeScript strict mode compliance
- [ ] Prettier formatting applied to all .astro files
- [ ] All API routes have proper Zod validation
- [ ] Content types are properly exported and used
- [ ] No client-side JavaScript for static content
- [ ] Performance budget maintained (check bundle size)
- [ ] SEO metadata properly configured

### FORBIDDEN Practices

- **NEVER use npm or yarn** - MUST use pnpm for all package management
- **NEVER use client:load** without justification - prefer client:visible or client:idle
- **NEVER skip content validation** - all content MUST have Zod schemas
- **NEVER ignore hydration impact** - understand JavaScript bundle size
- **NEVER use framework components for static content** - use .astro files
- **NEVER bypass TypeScript checking** - astro check must pass
- **NEVER store secrets in client-side code** - use astro:env server context
- **NEVER ignore image optimization** - always use Astro's Image component
- **NEVER mix concerns** - separate static content from interactive islands
- **NEVER use any type** - leverage Astro's built-in type safety
- **NEVER ignore build warnings** - address all build and TypeScript issues
- **NEVER use npx for regular commands** - use pnpm equivalents when available
- **NEVER use @astrojs/tailwind** - This project uses Tailwind v4 via PostCSS plugin
- **NEVER add other frameworks without justification** - Prefer React for interactive components
---

_This guide is optimized for Astro 5+ with Islands Architecture and modern web performance._
_Focus on minimal JavaScript, optimal hydration, and type-safe content management._
_Last updated: January 2025_
