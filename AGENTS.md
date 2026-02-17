# AGENTS.md

<!-- Last verified: 2026-02-16 -->

Guidance for AI tools contributing to this project. Keep changes consistent with existing patterns.

## Core Development Philosophy

- **KISS**: Prefer simple, understandable solutions.
- **YAGNI**: Implement only what is needed now.
- **DRY**: Extract repeated logic into shared components or utilities.
- **Accessibility**: Use semantic HTML and ARIA where needed. Ensure interactive elements (buttons, links, forms) are keyboard-accessible and have visible focus styles and appropriate labels (e.g. `aria-label` when text is hidden). Use the `.visually-hidden` utility class (in the `utils` layer) for screen-reader-only text.

## Project Overview

Astro component starter with CloudCannon for visual editing. Uses design tokens, CSS cascade layers, PostCSS, and an optional component library for documentation. See README for full setup details.

### Key Scripts

```
npm run dev             # Start development server (localhost:4321)
npm run build           # Production build (includes component library)
npm run build:no-library # Production build without component library docs
npm run lint            # Run all linters (ESLint, Stylelint, YML)
npm run lint:fix        # Auto-fix linting issues
npm run format          # Check formatting (Prettier)
npm run format:fix      # Auto-fix formatting
```

## Project Structure

```
src/
├── assets/              # Static assets (images)
├── component-library/   # Component documentation site (optional at build time)
├── components/          # All reusable components
│   ├── building-blocks/ # Core UI primitives
│   │   ├── core-elements/  # Buttons, headings, text, images, icons
│   │   ├── forms/          # Form controls (inputs, selects, textareas)
│   │   └── wrappers/       # Layout containers (grids, splits, cards, accordions)
│   ├── navigation/      # Navigation components (main-nav, footer, mobile, side, bar)
│   ├── page-sections/   # Full-width page sections
│   │   ├── builders/       # Flexible custom sections
│   │   ├── ctas/           # Call-to-action sections
│   │   ├── features/       # Feature showcases
│   │   ├── heroes/         # Hero/header sections
│   │   ├── info-blocks/    # FAQ and informational content
│   │   └── people/         # Team grids and testimonials
│   └── utils/           # Component utilities (renderBlock.astro)
├── content/             # Content collections
│   ├── pages/              # Page content (frontmatter with pageSections array)
│   └── blog/               # Blog posts (MDX)
├── data/                # Site data (JSON — navigation, SEO, etc.)
├── icons/               # SVG icon library (library/, social/)
├── layouts/             # Page layouts (BaseLayout.astro, Page.astro)
├── pages/               # Astro routes (pages, blog, component-library)
└── styles/              # Global styles
    ├── variables/          # Design tokens (colors, fonts, spacing, media)
    ├── base/               # Reset and base element styles
    └── themes/             # Theme definitions (_default.pcss, _contrast.pcss)
```

### Config Files

- `cloudcannon.config.yml` — Collections, inputs, and structures for CloudCannon.
- `.cloudcannon/structures/*.cloudcannon.structures.yml` — Global structures that aggregate structure-values via `values_from_glob`.
- `.cloudcannon/schemas/` — Schemas for page (`page.md`) and blog (`blog-post.mdx`) content types.
- `live-editing.js` — Registers all Astro components with CloudCannon's live editing system (`@cloudcannon/editable-regions`). Auto-discovers components via `import.meta.glob`.

### Path Aliases

Defined in `tsconfig.json`. Use these instead of relative paths:

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@building-blocks/*` | `src/components/building-blocks/*` |
| `@core-elements/*` | `src/components/building-blocks/core-elements/*` |
| `@forms/*` | `src/components/building-blocks/forms/*` |
| `@wrappers/*` | `src/components/building-blocks/wrappers/*` |
| `@navigation/*` | `src/components/navigation/*` |
| `@page-sections/*` | `src/components/page-sections/*` |
| `@features/*` | `src/components/page-sections/features/*` |
| `@builders/*` | `src/components/page-sections/builders/*` |
| `@component-utils/*` | `src/components/utils/*` |
| `@component-library/*` | `src/component-library/*` |
| `@layouts/*` | `src/layouts/*` |
| `@styles/*` | `src/styles/*` |
| `@data/*` | `src/data/*` |
| `@content/*` | `src/content/*` |
| `@assets/*` | `src/assets/*` |

## CSS and Theming

### PostCSS

Styles use PostCSS (`.pcss` extension) with these plugins: `postcss-import`, `postcss-custom-media`, `postcss-nested`, `postcss-each`, and `autoprefixer`. Nesting syntax and custom media queries are available in all style files.

### Cascade Layers

Layer order (declared in `BaseLayout.astro`):

`reset` → `base` → `components` → `page-sections` → `utils` → `overrides`

Later layers always win regardless of specificity. Use the correct layer for each component type:
- **Building blocks** → `@layer components`
- **Page sections** → `@layer page-sections`

### Design Tokens

Use CSS variables from `src/styles/variables/` and `src/styles/themes/`. Never hard-code colors or spacing in components.

- Colors: `var(--color-*)` (palette in `_colors.pcss`, semantic mapping in theme files)
- Spacing: `var(--spacing-*)`
- Fonts: `var(--font-*)`
- Content widths: `var(--content-width-*)`
- Media queries: custom media in `_media.pcss`

## Adding or Changing Components

Each component lives in its own folder alongside its CloudCannon config files. Follow these steps:

### Step 1: Create the Astro Component

Place the `.astro` file in the appropriate category folder. Destructure `_component` out of `Astro.props` and spread remaining attributes onto the root element:

```astro
---
const { _component, ...htmlAttributes } = Astro.props;
---
<section {...htmlAttributes}>
  <!-- component markup -->
</section>
```

### Step 2: Create the Structure-Value File

Create `<component-name>.cloudcannon.structure-value.yml` in the same folder:

```yaml
label: My Component
icon: dashboard
description: "Brief description of the component."
value:
  _component: page-sections/category/my-component
  title: ""
  description: ""
preview:
  text:
    - key: title
    - My Component
  icon: dashboard
picker_preview:
  text: My Component
  subtext: "Brief description of the component."
  icon: dashboard
_inputs_from_glob:
  - /src/components/page-sections/category/my-component/my-component.cloudcannon.inputs.yml
```

### Step 3: Create the Inputs File

Create `<component-name>.cloudcannon.inputs.yml` with one entry per editable prop:

```yaml
title:
  type: text
  comment: The main heading.
description:
  type: markdown
  comment: Supporting text below the heading.
```

Use CloudCannon's supported types: `text`, `markdown`, `image`, `file`, `array`, `object`, `select`, `boolean`, `number`, `date`, `url`, `color`, `code`. For select inputs, use `options.values` with `id` and `name`. For arrays of components, set `options.structures: _structures.<structureName>` pointing to a structure in `.cloudcannon/structures/`. Do not invent new input types. Reference: [CloudCannon Inputs](https://cloudcannon.com/documentation/developer-articles/configure-a-text-input/), [Structures](https://cloudcannon.com/documentation/developer-articles/create-a-structure/).

### Step 4: Register in a Global Structure

Ensure the structure-value file is picked up by the correct global structure's `values_from_glob` in `.cloudcannon/structures/`. For example, page sections are collected by `pageSections`, buttons by `buttonSections`, etc.

### Step 5: `_component` Path Convention

Paths like `building-blocks/core-elements/button` or `page-sections/heroes/hero-center`:
- No leading slash, no file extension.
- Must be kebab-case.
- Must match the actual file location under `src/components/`.
- Resolution is handled by `import.meta.glob` in `renderBlock.astro`.

### Navigation Components

Navigation components (`main-nav`, `footer`, `mobile`, `side`, `bar`) follow the same structure-value and inputs pattern as other components. They are registered in their own structures (e.g. `navData` for navigation item data) rather than in `pageSections`. Their `_component` paths use the `navigation/` prefix (e.g. `navigation/main-nav`).

## Visual Editor Integration

CloudCannon's visual editor uses data attributes on HTML elements for inline editing. Use these patterns:

**Text fields:**
```html
<h1 data-editable="text" data-prop="title">{title}</h1>
```

**Image fields:**
```html
<img data-editable="image" data-prop-src="imageSource" data-prop-alt="imageAlt" src={imageSource} alt={imageAlt} />
```

**Array fields** (sections rendered via `renderBlock.astro`):

```astro
<editable-array data-editable="array" data-component-key="_component" data-id-key="_component" data-prop="items">
  {items.map((item) => (
    <editable-array-item data-editable="array-item">
      <renderBlock block={item} />
    </editable-array-item>
  ))}
</editable-array>
```

The `live-editing.js` file at the project root registers all Astro components with CloudCannon's editable regions system. It auto-discovers every `.astro` file under `src/components/` and registers them by their kebab-case path. You should not normally need to modify this file.

## Collections and Content Types

Collections are how CloudCannon organizes content files. This project ships with three collections (`pages`, `blog`, `data`). New projects built from this starter will frequently need to add or remove collections and content type schemas.

Reference: [Collections](https://cloudcannon.com/documentation/articles/configure-your-collections/), [Schemas](https://cloudcannon.com/documentation/articles/schemas-reference/), [Add Button](https://cloudcannon.com/documentation/articles/configure-the-add-button-in-collections/), [Create Paths](https://cloudcannon.com/documentation/articles/set-the-path-for-new-files/).

### Existing Collections

| Collection | Path | Format | Editor | Description |
|---|---|---|---|---|
| `pages` | `src/content/pages` | `.md` | Visual | Frontmatter-driven pages using `pageSections` array |
| `blog` | `src/content/blog` | `.mdx` | Content | MDX blog posts with title, description, date, author, image, tags |
| `data` | `src/data` | `.json` | Data | Site-wide data files (navigation, SEO, etc.) |

### Adding a New Collection

Follow these steps in order. All collection configuration lives in `cloudcannon.config.yml`.

**Step 1: Create the content directory**

Create the directory where content files will live (e.g. `src/content/projects/`).

**Step 2: Create a schema file**

Place it in `.cloudcannon/schemas/`. The schema is a template file (`.md`, `.mdx`, or `.yml`) containing frontmatter with all fields and sensible defaults. This file populates new content when editors click +Add.

```yaml
# .cloudcannon/schemas/project.md
---
title:
description: ""
image: ""
featured: false
pageSections: []
---
```

For collections using the Content Editor (MDX/Markdown body), use `.md` or `.mdx` as appropriate. For data-only collections, use `.yml` or `.json`.

**Step 3: Add the collection to `collections_config`**

Add a new entry under `collections_config` in `cloudcannon.config.yml`. Required and recommended keys:

```yaml
collections_config:
  projects:
    # --- Required ---
    path: src/content/projects          # Where files live (relative to repo root)

    # --- Recommended ---
    glob:
      - "**/*.md"                       # File pattern to match
    url: /projects/[full_slug]/         # Output URL pattern
    icon: work                          # Material icon for sidebar (https://fonts.google.com/icons)
    _enabled_editors:
      - visual                          # Which editors: visual, content, data
    schemas:
      default:
        name: New Project
        path: .cloudcannon/schemas/project.md
        remove_extra_inputs: false      # Keep old inputs when schema evolves
    add_options:
      - name: Add New Project
        schema: default
        icon: work
    create:
      path: "[relative_base_path]/{filename|slugify|lowercase}.md"
    new_preview_url: /projects/

    # --- Optional: collection-level inputs ---
    _inputs:
      title:
        type: text
        comment: The project title.
      description:
        type: text
        comment: A brief project summary.
      image:
        type: image
        comment: Project cover image.
        options:
          paths:
            uploads: src/assets/images
```

Key points:
- `path` is relative to the repository root, **not** the `source` folder.
- `glob` filters which files in the path belong to this collection.
- `url` uses `[full_slug]` for the output URL — CloudCannon uses this to open the Visual Editor on the correct page.
- `_enabled_editors` controls which editing interfaces are available. Use `visual` for page-builder pages, `content` for rich-text/MDX content, `data` for structured data files.
- `schemas` populates the +Add dropdown. Each schema key is an arbitrary name; `path` points to the schema template file. Set `remove_extra_inputs: false` so existing content retains fields if the schema later changes.
- `add_options` customizes the +Add button. Each entry needs `name` and either `schema` (to create from a schema) or `href` (to link externally). You can also use `collection` to add items to a different collection.
- `create.path` uses CloudCannon placeholders: `[relative_base_path]` (preserves subfolder), `{filename|slugify|lowercase}` (user-provided filename, slugified), `{title|slugify}` (from frontmatter), `[ext]` (inferred extension). You can also use `extra_data` for computed values like date-prefixed filenames.

**Step 4: Add to `collection_groups`**

Add the collection key to the appropriate group in `collection_groups` so it appears in the sidebar:

```yaml
collection_groups:
  - heading: Content
    collections:
      - pages
      - blog
      - projects          # <-- Add here
  - heading: Data
    collections:
      - data
```

If `collection_groups` is not defined, CloudCannon shows collections in the order they appear in `collections_config`. Once defined, only collections listed in a group appear in the sidebar.

**Step 5: Create Astro page routes**

If the collection produces pages (not just data), create the corresponding route files in `src/pages/`:

- For a page-builder collection (like `pages`): create a dynamic route that reads frontmatter and renders `pageSections` via `renderBlock.astro`.
- For a content collection (like `blog`): create a dynamic route that renders the MDX body.

Look at the existing `src/pages/` routes for the pattern to follow.

**Step 6: (If applicable) Define Astro content collection**

If you're using Astro content collections (the `src/content/` directory), ensure a matching collection is defined in `src/content.config.ts` or `src/content/config.ts` with the appropriate schema/zod validation for the frontmatter fields.

### Adding a New Schema to an Existing Collection

To offer multiple content templates within a single collection (e.g. "Blog Post" and "Guest Post" in the blog collection):

1. Create a new schema file in `.cloudcannon/schemas/` with the template frontmatter.
2. Add a new key under the collection's `schemas`:

```yaml
collections_config:
  blog:
    schemas:
      default:
        name: New Blog Post
        path: .cloudcannon/schemas/blog-post.mdx
        remove_extra_inputs: false
      guest_post:                          # <-- New schema
        name: Guest Post
        path: .cloudcannon/schemas/guest-post.mdx
        remove_extra_inputs: false
```

3. Optionally add a matching `add_options` entry if you want a separate +Add button item for it.

CloudCannon tracks which schema a file was created with via the `_schema` frontmatter key (e.g. `_schema: default`). If you need a custom key name instead, set `schema_key` on the collection.

### Removing a Collection

1. Remove the collection entry from `collections_config` in `cloudcannon.config.yml`.
2. Remove the collection key from `collection_groups`.
3. Remove the schema file(s) from `.cloudcannon/schemas/` if no other collection uses them.
4. Remove the corresponding Astro page routes from `src/pages/` if they exist.
5. Optionally remove the content directory (e.g. `src/content/projects/`) and any Astro content collection config for it.
6. Remove any collection-level `_inputs`, `_select_data`, or `_structures` that were only used by this collection.

### Collection Best Practices

- **Always define at least one schema.** Without schemas, CloudCannon clones the last file in the collection when editors click +Add, which can lead to unexpected defaults.
- **Use `remove_extra_inputs: false` on schemas.** This prevents CloudCannon from stripping frontmatter fields that exist in content files but were later removed from the schema, protecting against data loss during schema evolution.
- **Set `_enabled_editors` explicitly.** Don't rely on the default (all editors). Page-builder pages should use `visual`; rich-text content should use `content`; JSON/YAML data should use `data`.
- **Use `create.path` for consistent file naming.** This prevents editors from creating files with arbitrary names. For date-prefixed posts, use `extra_data`:

```yaml
create:
  extra_data:
    dated_filename: "{date|year}-{date|month}-{date|day}-{title}"
  path: "[relative_base_path]/{dated_filename|slugify|lowercase}.mdx"
```

- **Configure `paths.uploads` for image inputs** at the collection level to keep assets organized:

```yaml
_inputs:
  image:
    type: image
    options:
      paths:
        uploads: src/assets/images
```

- **Keep schema files minimal.** Include all required fields with empty/default values. Don't put sample content in schemas — that becomes boilerplate editors have to delete.
- **Match the file extension in schemas to the collection's `glob`.** If the collection uses `**/*.mdx`, the schema file should be `.mdx`. If it uses `**/*.md`, use `.md`.

## CloudCannon Structures (Deep Dive)

Global structures in `.cloudcannon/structures/*.cloudcannon.structures.yml`:
- Use `id_key: _component` and `style: modal` for picker UX.
- Use `values_from_glob` to collect `*.cloudcannon.structure-value.yml` files.
- Reference structures in inputs with `_structures.<structureKey>`.

Available global structures include: `pageSections`, `buttonSections`, `cardSections`, `carouselSections`, `containerSections`, `contentSelectorSections`, `formBlocks`, `gridItemSections`, `links`, `navData`, `socials`, `accordionSections`, `splitSections`.

## Snippets

Snippets (`*.cloudcannon.snippets.yml`) make a component insertable as a block in the **Content Editor** when editing MDX (e.g. blog posts). Use snippets when the component must be available inside rich/MDX content. If the component is only used in page frontmatter (`pageSections`) and edited in the Visual or Data Editor, structure-value and inputs are sufficient — snippets are optional.

When adding a snippet, use `template: mdx_component`, `definitions.component_name`, `named_args` with `editor_key` matching props, and `_inputs_from_glob` to the same inputs file. See existing snippet files (e.g. `cta-center.cloudcannon.snippets.yml`, `feature-grid.cloudcannon.snippets.yml`) for the pattern.

## Component Library (Documentation)

The component library under `src/component-library/` documents components and is optional at build time (set `DISABLE_COMPONENT_LIBRARY` env var, or use `npm run build:no-library`). When contributing:

- Add or update components following the patterns above; the library should reflect best practices only (no experimental or one-off patterns).
- Structure-value files are discovered under `src/components/` via `structureFiles.ts` (`.cloudcannon.structure-value.yml`). New components with structure-value in that tree are picked up automatically.
- Document components in the library's `content/` and `layouts/` as needed; keep docs aligned with actual props and usage. Do not duplicate large code blocks — prefer references to source and short examples.

## Linting and Formatting

The project uses three linting/formatting tools. Run them before committing:

- **ESLint** (`eslint.config.js`) — JavaScript/TypeScript linting.
- **Stylelint** (`.stylelintrc.json`) — CSS/PostCSS linting.
- **Prettier** (`.prettierrc`) — Code formatting.

Use `npm run lint:fix && npm run format:fix` to auto-fix most issues.

## Common Pitfalls

- **Don't hard-code colors or spacing.** Always use design token variables (`var(--color-*)`, `var(--spacing-*)`, etc.).
- **Don't invent new CloudCannon input types.** Use or combine CloudCannon's built-in types.
- **`_component` paths must be kebab-case** with no leading slash and no file extension.
- **Always destructure `_component`** out of props — don't pass it through to the HTML element.
- **Use the correct CSS layer.** Building blocks in `@layer components`, page sections in `@layer page-sections`. Putting styles in the wrong layer causes unexpected specificity behavior.
- **PostCSS, not plain CSS.** Use `.pcss` extension and PostCSS features (nesting, custom media). Don't write vanilla CSS workarounds for things PostCSS handles.
