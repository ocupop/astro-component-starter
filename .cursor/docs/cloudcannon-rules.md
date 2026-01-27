# CloudCannon CMS Rules
This file provides comprehensive guidance for working with CloudCannon CMS integration in Astro projects.

## Core Concepts

### Content vs Pages Separation

- **Content** (`src/content/`) - Markdown/MDX files that define page data and structure
- **Pages** (`src/pages/`) - Astro page templates that generate routes from content
- Content files contain frontmatter with `pageSections` arrays
- Pages consume content collections and render components dynamically

### CloudCannon Architecture

- **Collections** - Defined in `cloudcannon.config.yml`, map to content directories
- **Inputs** - Form fields shown in CloudCannon editor sidebar (`.cloudcannon.inputs.yml`)
- **Structures** - Component picker definitions (`.cloudcannon.structure-value.yml`)
- **Editable Regions** - Live preview editing via `data-prop` attributes
- **Component Registration** - Auto-registration via `live-editing.js`

## 📁 File Structure

```
src/
├── content/                    # Content collections (markdown/mdx)
│   ├── pages/                 # Page content files
│   └── blog/                  # Blog post files
├── components/                # Astro components
│   └── building-blocks/
│       └── wrappers/
│           └── card/
│               ├── Card.astro                          # Component implementation
│               ├── card.cloudcannon.inputs.yml        # CloudCannon form inputs
│               └── card.cloudcannon.structure-value.yml # Component picker config
├── pages/                     # Page templates (generate routes)
│   └── [...slug].astro       # Dynamic route handler
.cloudcannon/
└── structures/                # Global structure definitions
    └── pageSections.cloudcannon.structures.yml
cloudcannon.config.yml         # CloudCannon configuration
live-editing.js                # Component registration script
```

## ⚙️ CloudCannon Configuration (`cloudcannon.config.yml`)

### Collections Configuration

```yaml
collections_config:
  pages:
    path: src/content/pages
    glob:
      - "**/*.md"
    url: /[full_slug]/
    icon: laptop_mac
    _enabled_editors:
      - visual
    add_options:
      - name: Add New Page
        schema: default
        icon: pages
    schemas:
      default:
        name: New Page
        path: .cloudcannon/schemas/page.md
        remove_extra_inputs: false
    create:
      path: "[relative_base_path]/{filename|slugify|lowercase}.md"
    new_preview_url: /
    _inputs:
      title:
        type: text
        comment: Controls the metadata title for the page.
  blog:
    path: src/content/blog
    glob:
      - "**/*.mdx"
    url: /blog/[full_slug]/
    icon: article
    _enabled_editors:
      - content
```

### Key Configuration Patterns

- **`path`** - Directory containing collection files
- **`glob`** - File patterns to include
- **`url`** - URL template using `[full_slug]` variable
- **`icon`** - Google Material Icons name (from Material Icons library via Google Fonts)
- **`_enabled_editors`** - `visual` for page builder, `content` for markdown editor
- **`_inputs`** - Global inputs for the collection
- **`add_options`** - Options for creating new items
- **`schemas`** - Template files for new items

### Global Structures

```yaml
_structures_from_glob:
  - /.cloudcannon/structures/*.cloudcannon.structures.yml
```

Structures define component groups available in the editor. They reference structure-value files via glob patterns.

## 📝 Component Inputs (`.cloudcannon.inputs.yml`)

### Basic Input Types

```yaml
# Text input
label:
  type: text
  comment: Optional label for the card to help identify it in the editor.

# Switch (boolean)
rounded:
  type: switch
  comment: Whether to apply rounded corners to the card.

# Select dropdown
maxContentWidth:
  type: select
  comment: Maximum width constraint for the card content.
  options:
    values:
      - id: xs
        name: Extra Small
      - id: sm
        name: Small
      - id: md
        name: Medium

# URL input
link:
  type: url
  comment: URL to make the entire card clickable.

# Image input
backgroundImage.source:
  type: image
  comment: URL or path to the background image.
  options:
    paths:
      uploads: src/assets/images
      static: ""

# Object input
backgroundImage:
  type: object
  comment: Background image configuration for the card.
  options:
    preview:
      icon: image
      text:
        - key: alt
        - Background Image
      subtext:
        - key: source
        - Add an image source
      image:
        - key: source

# Array input (references structures)
contentSections:
  type: array
  comment: Content inside the main area of the card, with padding.
  options:
    structures: _structures.cardSections

# Multiselect
tags:
  type: multiselect
  comment: What tags are relevant to this content
  options:
    values:
      - id: identityDesign
        name: Identity Design
      - id: eventDesign
        name: Event Design

# TODO: html vs markdown - opinionated
# Rich text editor (field name ends with -html)
eyebrow-text-html:
  type: html
  comment: Rich text content with formatting options.
```

**Rich Text Editing**: Fields ending with `-html` automatically display a rich text editor in CloudCannon, allowing editors to format text with bold, italic, links, lists, etc. The field name must end with `-html` suffix (e.g., `eyebrow-text-html`, `description-html`).

### Conditional Visibility

```yaml
beforeContentSections:
  type: array
  comment: Content that appears above the main card area.
  hidden: "!showBeforeAfter"  # Hidden when showBeforeAfter is false
  options:
    structures: _structures.cardSections
```

### Hidden Fields

Fields that begin with an underscore (`_`) are automatically hidden from CloudCannon editors, similar to setting `hidden: true`. This is useful for internal fields that shouldn't be edited directly.

```yaml
# Hidden from editor - field name starts with underscore
_component: building-blocks/wrappers/card
_eyebrow-text: Internal value  # Not visible in CMS editor
_schema: default

# Visible in editor
eyebrow: Welcome  # Visible in CMS editor
heading: Main Heading  # Visible in CMS editor
```

**Note**: Fields prefixed with `_` are treated as hidden/internal and will not appear in the CloudCannon editor sidebar, even if defined in the inputs file.

### Input Best Practices

- **Always include `comment`** - Helps editors understand what each field does
- **Use descriptive `id` values** - Match component prop names exactly
- **Provide sensible defaults** - Set default values in structure-value files
- **Group related fields** - Use object types for complex nested data
- **Reference structures** - Use `structures` option for array inputs
- **Hide internal fields** - Prefix fields with `_` to hide them from editors (e.g., `_component`, `_schema`)
- **Enable rich text** - Append `-html` to field names for rich text editing (e.g., `description-html`)

## 🧩 Structure Values (`.cloudcannon.structure-value.yml`)

### Basic Structure

```yaml
label: Card
icon: crop_square
description: Groups related content within a section.
value:
  _component: building-blocks/wrappers/card
  label: null
  contentSections: []
  maxContentWidth: null
  paddingHorizontal: sm
  paddingVertical: sm
  colorScheme: null
  backgroundColor: base
  backgroundImage:
    source: null
    alt: null
    positionVertical: top
    positionHorizontal: center
  link: null
  rounded: false
  border: false
  showBeforeAfter: false
  beforeContentSections: []
  afterContentSections: []
  tags: []
preview:
  text:
    - Card
  subtext:
    - key: label
  icon: crop_square
picker_preview:
  text: Card
  subtext: Groups related content within a section.
_inputs_from_glob:
  - /src/components/building-blocks/wrappers/card/card.cloudcannon.inputs.yml
```

### Structure Fields

- **`label`** - Display name in component picker
- **`icon`** - Google Material Icons name (see `_select_data.icons` in config). Icons are namespaced from Google Fonts Material Icons library.
- **`description`** - Tooltip text in picker
- **`value`** - Default props when component is added
- **`_component`** - Path to component (MUST match registration path)
- **`preview`** - Preview shown in editor sidebar
- **`picker_preview`** - Preview shown in component picker
- **`_inputs_from_glob`** - Path to inputs file

### Component Path Convention

Components are registered using kebab-case paths:
- File: `src/components/building-blocks/wrappers/card/Card.astro`
- Path: `building-blocks/wrappers/card`
- `_component` value: `building-blocks/wrappers/card`

If filename matches parent folder (e.g., `card/Card.astro`), the filename is omitted:
- File: `src/components/wrappers/card/Card.astro`
- Path: `wrappers/card`

## 🎨 Editable Regions

### Data Attributes for Live Editing

```astro
<!-- Text editing -->
<h2 data-prop="heading">
  {heading}
</h2>

<!-- Image editing -->
<Image
  source={imageSource}
  alt={imageAlt}
  data-prop-src="imageSource"
  data-prop-alt="imageAlt"
  data-editable="image"
/>

<!-- Array editing -->
<editable-array
  data-editable="array"
  data-component-key="_component"
  data-id-key="_component"
  data-prop="contentSections"
>
  {contentSections?.map((block) => (
    <editable-array-item
      data-id={block._component}
      data-component={block._component}
    >
      <Component {...block} />
    </editable-array-item>
  ))}
</editable-array>
```

### Editable Region Attributes

- **`data-prop`** - Maps to frontmatter property for text editing
- **`data-prop-src`** - Maps to image source property
- **`data-prop-alt`** - Maps to image alt text property
- **`data-editable="image"`** - Enables image picker/upload
- **`data-editable="array"`** - Enables array manipulation
- **`data-component-key`** - Property name that identifies component type
- **`data-id-key`** - Property used as unique identifier

### Using renderBlock Utility

```astro
---
import Component from "@components/utils/renderBlock.astro";
---

<Component
  contentSections={contentSections}
  propName="contentSections"
  editable={true}
/>
```

The `renderBlock.astro` utility automatically:
- Wraps arrays in `editable-array` elements
- Maps `_component` to actual component imports
- Handles component registration paths
- Provides fallback for missing components

## 🔄 Component Registration (`live-editing.js`)

Components are auto-registered for CloudCannon editable regions:

```javascript
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";

const componentModules = import.meta.glob("./src/components/**/*.astro", { eager: true });

// Converts PascalCase to kebab-case
function pascalToKebab(pascal) {
  return pascal
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
}

// Register all components
for (const [path, module] of Object.entries(componentModules)) {
  const match = path.match(/\.\/src\/components\/(.+)\.astro$/);
  if (match) {
    const fullPath = match[1];
    const parts = fullPath.split("/");
    const filename = parts[parts.length - 1];
    const kebabFilename = pascalToKebab(filename);
    const kebabParent = parts.length > 1 ? pascalToKebab(parts[parts.length - 2]) : null;

    // Remove redundant filename if it matches parent folder
    const registrationPath =
      kebabFilename === kebabParent
        ? parts.slice(0, -1).join("/")
        : parts.slice(0, -1).concat(kebabFilename).join("/");

    registerAstroComponent(registrationPath, module.default);
  }
}
```

**Key Points:**
- Components must be registered to appear in editable regions
- Registration path must match `_component` value in structure-value files
- Path conversion handles PascalCase filenames automatically

## 📄 Content File Structure

### Page Content (`src/content/pages/*.md`)

```markdown
---
_schema: default
title: Page Title
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow: Welcome
    heading: Main Heading
    subtext: Subheading text
    description-html: <p>Rich <strong>formatted</strong> text</p>
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: Click Me
        link: /about
        variant: primary
    colorScheme: default
    backgroundColor: base
  - _component: building-blocks/wrappers/card
    label: Featured Card
    contentSections:
      - _component: building-blocks/core-elements/heading
        text: Card Title
        level: h2
    paddingHorizontal: md
    paddingVertical: md
---
```

### Blog Content (`src/content/blog/*.mdx`)

```markdown
---
title: Blog Post Title
description: Post description
pubDate: 2025-01-15
author: Author Name
image: /images/post.jpg
tags:
  - astro
  - cloudcannon
---

# Blog Post Content

MDX content goes here...
```

## 🏗️ Page Templates (`src/pages/[...slug].astro`)

```astro
---
import Page from "@layouts/Page.astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const pages = await getCollection("pages");

  return pages
    .filter((page) => {
      const slug = page.id.replace(/index$/, "");
      return slug !== "blog";
    })
    .map((page) => {
      const slug = page.id.replace(/index$/, "");
      if (slug.length === 0) {
        return { params: { slug: undefined }, props: { page } };
      }
      return { params: { slug }, props: { page } };
    });
}

const { page } = Astro.props;
const { Content } = await render(page);
---

<Page frontmatter={page.data}>
  <Content />
</Page>
```

## 🎯 Best Practices

### Component Development

1. **Always create input files** - Every component should have `.cloudcannon.inputs.yml`
2. **Create structure-value files** - For components that appear in pickers
3. **Use descriptive comments** - Help editors understand each field
4. **Set sensible defaults** - In structure-value `value` object
5. **Match prop names** - Input `id` must match component prop names exactly

### Content Management

1. **Separate content from pages** - Content in `src/content/`, pages in `src/pages/`
2. **Use glob loaders** - For flexible content loading (see `content/config.ts`)
3. **Validate with Zod** - Content collections must have schemas
4. **Structure arrays properly** - Use `_component` key to identify component type

### Editable Regions

1. **Always add `data-prop`** - For text fields that should be editable inline
2. **Use `renderBlock` utility** - For rendering component arrays
3. **Handle missing components** - Provide fallbacks or warnings
4. **Test in CloudCannon** - Verify editable regions work correctly

### File Naming Conventions

- **Component files**: PascalCase (e.g., `Card.astro`)
- **Input files**: kebab-case (e.g., `card.cloudcannon.inputs.yml`)
- **Structure files**: kebab-case (e.g., `card.cloudcannon.structure-value.yml`)
- **Content files**: kebab-case slugs (e.g., `about-us.md`)

## ⚠️ Common Pitfalls

### Component Path Mismatches

**Problem**: Component doesn't appear in editable regions or picker

**Solution**:
- Verify registration path in `live-editing.js` matches `_component` value
- Check that component file exists and exports default
- Ensure path uses kebab-case, not PascalCase

### Missing Input Definitions

**Problem**: Component props don't appear in CloudCannon sidebar

**Solution**:
- Create `.cloudcannon.inputs.yml` file
- Reference it in structure-value `_inputs_from_glob`
- Ensure input `id` matches component prop names exactly

### Editable Regions Not Working

**Problem**: Text/images not editable inline in preview

**Solution**:
- Add `data-prop` attributes to editable elements
- Use `data-editable="image"` for images
- Wrap arrays in `editable-array` elements
- Ensure `renderBlock` utility is used for arrays

### Structure Not Appearing in Picker

**Problem**: Component doesn't show in component picker

**Solution**:
- Verify structure-value file exists
- Check that structure file references it via glob
- Ensure `_component` value matches registration path
- Verify `label`, `icon`, and `description` are set

## 📚 Related Documentation

- [CloudCannon Documentation](https://cloudcannon.com/documentation/)
- [Editable Regions](https://cloudcannon.com/documentation/articles/what-are-editable-regions/)
- [Inputs](https://cloudcannon.com/documentation/articles/what-are-inputs/)
- [Structures](https://cloudcannon.com/documentation/articles/what-is-a-structure/)
- [Snippets](https://cloudcannon.com/documentation/articles/what-is-a-snippet/)

---

_This guide is optimized for CloudCannon CMS integration with Astro._
_Focus on visual editing, component reusability, and content management workflows._
_Last updated: January 2026_

