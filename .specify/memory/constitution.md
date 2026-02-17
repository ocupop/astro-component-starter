<!-- Sync Impact Report
  Version change: N/A → 1.0.0
  Modified principles: N/A (initial ratification)
  Added sections:
    - Core Principles (5): Simplicity, Component-First Architecture, Design Token Discipline, Accessibility First, CloudCannon Compatibility
    - Development Standards (CSS layers, PostCSS, linting)
    - Quality Gates (linting, formatting, pre-commit checks)
    - Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md ✅ (Constitution Check section is generic — no update needed)
    - .specify/templates/spec-template.md ✅ (requirements/scenarios are generic — no update needed)
    - .specify/templates/tasks-template.md ✅ (task structure is generic — no update needed)
  Follow-up TODOs: None
-->

# Astro Component Starter Constitution

## Core Principles

### I. Simplicity (KISS / YAGNI / DRY)

- Every solution MUST prefer the simplest approach that meets the requirement. Complexity MUST be justified in writing.
- Code MUST NOT be written speculatively. Implement only what is needed now; do not build for hypothetical future requirements.
- Repeated logic MUST be extracted into shared components or utilities. Duplication across two or more locations is the threshold for extraction.
- When choosing between abstractions, prefer the one with fewer moving parts and less indirection.

**Rationale**: A starter template must remain approachable. Unnecessary complexity deters adoption and increases maintenance burden for every downstream project.

### II. Component-First Architecture

- Every UI element MUST be built as a self-contained Astro component in the appropriate category folder (`building-blocks/`, `page-sections/`, `navigation/`).
- Components MUST destructure `_component` out of `Astro.props` and spread remaining attributes onto the root HTML element.
- Component paths MUST be kebab-case with no leading slash and no file extension, matching the actual file location under `src/components/`.
- Components MUST NOT depend on global state or side effects outside their own scope. Data flows in through props; rendering is deterministic.
- New components MUST include a CloudCannon structure-value file and an inputs file alongside the `.astro` file.

**Rationale**: Modular, self-contained components enable independent development, testing, and documentation. The component library's value depends on each piece being reusable in isolation.

### III. Design Token Discipline

- Components MUST use CSS custom properties from `src/styles/variables/` and `src/styles/themes/` for all visual values (colors, spacing, fonts, content widths).
- Hard-coded color values, magic numbers for spacing, and inline font declarations are NOT permitted in component styles.
- New design tokens MUST be added to the appropriate variables file rather than defined locally within a component.
- Theme-aware components MUST reference semantic color tokens (mapped in theme files), not raw palette values.

**Rationale**: Design tokens are the single source of truth for visual consistency. Hard-coded values break theming, make global changes impossible, and create drift between components.

### IV. Accessibility First

- All components MUST use semantic HTML elements appropriate to their purpose (`<nav>`, `<main>`, `<button>`, `<section>`, etc.).
- Interactive elements (buttons, links, form controls) MUST be keyboard-accessible and MUST have visible focus styles.
- Elements with visual-only labels MUST include an accessible name via `aria-label`, `aria-labelledby`, or the `.visually-hidden` utility class.
- Images MUST have meaningful `alt` text (or `alt=""` with `role="presentation"` for decorative images).
- Color contrast MUST meet WCAG 2.1 AA minimum ratios (4.5:1 for normal text, 3:1 for large text and UI components).

**Rationale**: Accessibility is a baseline quality standard, not an enhancement. Components in a starter template set the pattern for every page built downstream — inaccessible defaults propagate inaccessible sites.

### V. CloudCannon Compatibility

- Every component intended for use in the Visual Editor MUST have a corresponding `*.cloudcannon.structure-value.yml` and `*.cloudcannon.inputs.yml` file.
- Input definitions MUST use only CloudCannon's built-in input types (`text`, `markdown`, `image`, `select`, `boolean`, `number`, `date`, `url`, `color`, `code`, `file`, `array`, `object`). Custom input types MUST NOT be invented.
- Structure-value files MUST include `preview` and `picker_preview` blocks for a usable editing experience.
- Visual Editor data attributes (`data-editable`, `data-prop`) MUST be applied to editable elements so inline editing works without code changes.
- The `_component` path in structure-values MUST exactly match the component's file path under `src/components/` (kebab-case, no extension, no leading slash).

**Rationale**: CloudCannon integration is a primary value proposition of this starter. Broken or incomplete editor configuration forces content editors back into code, defeating the purpose.

## Development Standards

- **CSS Cascade Layers**: Building block components MUST use `@layer components`. Page section components MUST use `@layer page-sections`. Styles MUST NOT be placed in the wrong layer.
- **PostCSS**: All stylesheets MUST use the `.pcss` extension and PostCSS features (nesting, custom media, imports). Plain CSS workarounds for PostCSS-supported features are NOT permitted.
- **File Conventions**: Component folders MUST contain the `.astro` file, CloudCannon config files, and component-scoped styles (if any) — all co-located. Styles MUST NOT live in a separate global directory.
- **Path Aliases**: Imports MUST use the path aliases defined in `tsconfig.json` (e.g., `@components/*`, `@styles/*`) instead of relative paths when crossing directory boundaries.

## Quality Gates

- **Linting**: All code MUST pass ESLint (JS/TS), Stylelint (CSS/PostCSS), and YML lint checks before merge. Run `npm run lint` to verify.
- **Formatting**: All code MUST conform to Prettier formatting rules. Run `npm run format` to verify.
- **Build**: The project MUST build successfully with both `npm run build` and `npm run build:no-library` (component library is optional at build time).
- **No Regressions**: Changes to shared utilities, design tokens, or base styles MUST be validated against existing components to ensure no visual or functional regressions.

## Governance

- This constitution is the authoritative source for project standards. When a practice conflicts with this document, the constitution takes precedence.
- Amendments MUST be documented with a version bump, rationale, and updated date. Use semantic versioning: MAJOR for principle removals or incompatible redefinitions, MINOR for new principles or material expansions, PATCH for clarifications and wording fixes.
- All contributions (PRs, code reviews, AI-assisted changes) MUST verify compliance with these principles. Non-compliance MUST be flagged and resolved before merge.
- Runtime development guidance lives in `AGENTS.md` at the repository root. The constitution defines *what* standards to uphold; `AGENTS.md` defines *how* to implement them.

**Version**: 1.0.0 | **Ratified**: 2026-02-16 | **Last Amended**: 2026-02-16
