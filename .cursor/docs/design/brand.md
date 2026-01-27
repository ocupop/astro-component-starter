# Ocupop Brand Guidelines

**Status**: 🔄 Draft
**Last Updated**: 2026-01-26
**Version**: 1.0
**Extends**: docs/design/principles.md

---

## Brand Overview

### Mission
A small, super-powered creative agency helping brands thrive through strategic design, brand positioning, and meaningful digital experiences. 25 years of shaping tech, design, and brand culture with zero awards and all the wins that matter.

### Brand Personality
**Adjectives**: Bold, Authentic, Irreverent, Professional, Direct

**Tone**: Ocupop doesn't bullshit. The brand is refreshingly honest, casually profane when appropriate, and fiercely dedicated to doing great work. They're the anti-agency agency—no jargon, no corporate speak, just straight talk about solving problems and making clients' lives easier.

TODO: possible addition
**Voice Characteristics**:
- Conversational and direct ("Getting Shit Done is our Love Language")
- Self-aware humor ("A small super-powered creative agency with zero awards")
- No corporate buzzwords ("Don't expect us to wax poetic trying to sell you our Brandmaker 3000™")
- Honest and transparent ("We will really listen. Promise.")
- Passionate but unpretentious

**Audience**:
- Companies proud of their work, products, and employees
- Brands seeking authentic creative partnerships, not vendor relationships
- Organizations that value substance over style
- Clients looking for "business therapists" who embed with teams
- Partners from startups to web giants (Google, Mozilla, Consumer Reports)

---

## Visual Identity

### Color Palette

> Implements principles.md "Color" section (Default Strictness: 🟡 MEDIUM)
> **Project Strictness Override**: Analysis based on website observation

#### Primary Colors

```css
/* Primary Brand Color - Orange */
--color-primary: #FF6D39;
```
- **Usage**: buttons, primary text, bold statements, navigation
- **Strictness**: 🔴 HIGH (exact hex only)
<!-- TODO: Source & Accessibilty -->
- **Accessibility**:
- **Source**:

```css
/* Secondary Brand Color - Blue */
--color-secondary: #2FA0F8;
```
- **Usage**: buttons, bold statements, navigation
- **Strictness**: 🔴 HIGH
- **Accessibility**:

```css
/* Accent Brand Color - Pink */
--color-accent: #F7B5ED;

```
- **Usage**: buttons, bold statements, navigation
- **Strictness**: 🔴 HIGH
- **Accessibility**:


#### Color Scales (Generated)

> Generate using tools like: coolors.co, adobe color, or manually

**Primary Scale**:
```css
--color-primary-50:  #FFF0EB;   /* Lightest */
--color-primary-100: #FFE1D6;
--color-primary-200: #FFC3AD;
--color-primary-300: #FFA585;
--color-primary-400: #FF9670;
--color-primary-500: #FF6D39;   /* Base - from above */
--color-primary-600: #FF4B0A;
--color-primary-700: #CC3600;
--color-primary-800: #A32C00;
--color-primary-900: #661B00;   /* Darkest */
```

**Secondary Scale**:
```css
--color-secondary-50:  #EBF6FE;   /* Lightest */
--color-secondary-100: #C4E4FD;
--color-secondary-200: #9DD2FB;
--color-secondary-300: #75C0FA;
--color-secondary-400: #62B8F9;
--color-secondary-500: #2FA0F8;   /* Base - from above */
--color-secondary-600: #098AEC;
--color-secondary-700: #0773C5;
--color-secondary-800: #05508A;
--color-secondary-900: #032E4F;   /* Darkest */
```

**Accent Scale**:
```css
--color-accent-50:  #FDEDFB;   /* Lightest */
--color-accent-100: #FBDAF7;
--color-accent-200: #F9C8F3;
--color-accent-300: #F7B5ED;   /* Base - from above */
--color-accent-400: #F391E7;
--color-accent-500: #EF6CDF;
--color-accent-600: #EB47D8;
--color-accent-700: #E723D0;
--color-accent-800: #CA16B5;
--color-accent-900: #A51294;   /* Darkest */
```

#### Semantic Colors
```css
--color-success: #15A620;
--color-warning: #F5C63F;
--color-error:   #CC3600;
--color-info:    #FF6D39;  /* Or reference secondary */
```

#### Neutral Palette
```css
--color-black:   #000000;  /* Pure black */
--color-gray-700: #1F2528; /* Text and primary dark backgrounds */
--color-gray-500: #494949; /* Secondary text & subtle dark backgrounds */
--color-gray-300: #E8E1D8; /* Primary light background color */
--color-gray-100: #F8F7F5; /* Subtle backgrounds */
--color-white:   #FFFFFF;  /* Pure white */
```
**Strictness**: 🔴 HIGH - Use these exact values for consistency

---

### Typography

> Implements principles.md "Typography" section (Strictness: 🔴 HIGH)

#### Font Stack

<!-- TODO: font name variables... -->
```css
/* Primary Font Family - Clean, Modern Sans-Serif */
--font-primary: "commuters-sans", "system-ui", sans-serif;

/* Display/Headline Font - Bold, Impactful */
--font-display: "Berlingske Serif Regular", sans-serif;
```

**Philosophy**: System fonts ensure fast loading, universal compatibility, and clean presentation. Ocupop prioritizes performance and clarity over decorative typography.

**Licensing**: Adobe Fonts (commuters sans) & FontStand (Berlingske)

**Fallbacks**: System fonts ensure text displays even if custom font fails

**Strictness**: 🔴 HIGH - Only use fonts from approved stack

#### Type Scale
<!-- TODO: something to look at -->
> Base size: 16px | Scale ratio: [1.25 / 1.333 / custom]

```css
--text-xs:   12px; /* Line height: 16px (1.333) */
--text-sm:   14px; /* Line height: 20px (1.429) */
--text-base: 16px; /* Line height: 24px (1.5) */
--text-lg:   18px; /* Line height: 28px (1.556) */
--text-xl:   20px; /* Line height: 28px (1.4) */
--text-2xl:  24px; /* Line height: 32px (1.333) */
--text-3xl:  30px; /* Line height: 36px (1.2) */
--text-4xl:  36px; /* Line height: 40px (1.111) */
--text-5xl:  48px; /* Line height: 48px (1) */
--text-6xl:  60px; /* Line height: 60px (1) - Optional */
```

**Strictness**: 🔴 HIGH - Only use sizes from this scale

#### Font Weights

```css
--weight-normal:   400; /* Body text, default */
--weight-semibold: 600; /* Subheadings, emphasis */
--weight-bold:     700; /* Headlines, strong emphasis */
--weight-black:    900; /* Hero headlines, major statements */
```

**Usage Guidelines**:
- **Headlines**: Bold (700) or Black (900) - big, bold statements
- **Body Text**: Normal (400) - highly readable
- **UI Elements**: Semibold (600) for subtle emphasis
- **Hero Text**: Black (900) for maximum impact ("Getting Shit Done")

**Strictness**: 🔴 HIGH - Only use these four weights

---

### Spacing System

> Implements principles.md "Spacing" section (Strictness: 🔴 HIGH)

#### Base Unit: 8px

**Philosophy**: All spacing should be multiples of 8px for consistent rhythm

#### Spacing Scale

```css
--space-0:  0px;   /* No space */
--space-1:  8px;   /* 1x - Tiny */
--space-2:  16px;  /* 2x - Small */
--space-3:  24px;  /* 3x - Medium */
--space-4:  32px;  /* 4x - Large */
--space-5:  40px;  /* 5x - XL */
--space-6:  48px;  /* 6x - 2XL */
--space-8:  64px;  /* 8x - 3XL */
--space-10: 80px;  /* 10x - 4XL */
--space-12: 96px;  /* 12x - 5XL */
--space-16: 128px; /* 16x - 6XL */
--space-20: 160px; /* 20x - 7XL */
```
TODO: this should probably be less specific & more consistent
**Common Uses**:
- Hero sections: Generous whitespace (space-12 to space-20)
- Component padding: space-4 to space-6
- Element margins: space-2 to space-4
- Portfolio card spacing: space-6
- Section breaks: space-10 to space-16

**Strictness**: 🟡 MEDIUM

---

### Layout System

> Implements principles.md "Layout & Hierarchy" section

#### Grid System

**Columns**: 12-column grid (standard)
**Desktop Gutter**: 24px (3x base unit)
**Mobile Gutter**: 16px (2x base unit)
**Max Container Width**: 1400px (generous for portfolio)

<!-- TODO: addition -->
**Layout Philosophy**:
- Generous whitespace to let work breathe
- Full-bleed images for portfolio pieces
- Asymmetric layouts for visual interest
- Bold hero sections with centered, large type

#### Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large desktop */
```

**Mobile-First Approach**: Essential - portfolio must shine on all devices

**Strictness**: 🔴 HIGH - Responsive excellence is non-negotiable

---

### Elevation & Depth

#### Shadow System

```css
/* Minimal shadow use - clean, flat design preferred */
--shadow-none: none;
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
```

**Usage**:
- Portfolio cards at rest: `--shadow-sm` or none
- Cards on hover: `--shadow-md`
- Minimal elevation - flat design aligns with honest, direct brand
- Modals/Dialogs: `--shadow-xl`
- Dropdowns: `--shadow-lg`

#### Border Radius

```css
--radius-none: 0px;    /* Sharp, clean edges */
--radius-2xl:   12px;   /* Standard UI elements  - primary style */
--radius-full: 9999px; /* Pills, circular avatars */
```

**Common Uses**:
- Buttons: `--radius-full` (9999px)
- Inputs: `--radius-full` (9999px)
- Cards: `--radius-2xl` (12px) or none
- Modals: `--radius-2xl` (16px)

---

## Components

> Implements principles.md "Components" section (Strictness: 🟡 MEDIUM)

### Buttons

#### Primary Button
```css
background: var(--color-accent);
color: var(--color-white);
padding: 14px 32px;
border-radius: var(--radius-full);
font-weight: var(--weight-semibold);
font-size: var(--text-base);
text-transform: uppercase;

/* States */
/* TODO: we should probably consider some less designed elements */
hover: var(--color-accent-600);
active: var(--color-accent-700);
disabled: opacity 50%;
focus: outline 3px solid primary with offset;
```

#### Secondary Button (Outline)
```css
background: var(--color-secondary);
color: var(--color-white);
padding: 14px 32px;
border-radius: var(--radius-full);
font-weight: var(--weight-semibold);

hover: background var(--color-secondary-600);
```

#### Button (Tertiary)
```css
background: none;
border: none;
color: var(--color-primary);
text-decoration: underline;
font-weight: var(--weight-normal);

hover: background var(--color-primary-700);
```
<!-- TODO: add other component rules? Shorten up? -->
---

## Tone & Voice

> Implements principles.md "Content" section (Strictness: 🟢 LOW - Flexible)

### Brand Voice

**Core Characteristics**: Authentic, Bold, Direct, Irreverent, Professional

**Occupy the middle ground between**:
- Too formal ←→ Too casual
- Corporate speak ←→ Unprofessional
- Humble ←→ Arrogant

**The Ocupop sweet spot**: Confident expertise with zero pretension

### Writing Style

**DO:**
- Use casual profanity when it adds authenticity ("Getting Shit Done")
- Be direct and honest ("We don't need to juice our business dating profile")
- Speak like a real person ("We will really listen. Promise.")
- Own your expertise without being pompous
- Use humor that's self-aware, not self-deprecating
- Show personality in every sentence
- Address readers as "you"
- Keep it conversational: "Sounds like a great match, huh?"

**DON'T:**
- Use buzzwords ("synergy," "ideation," "disrupt")
- Be generic or corporate ("leverage best practices")
- Oversell ("world's best," "revolutionary")
- Hide behind jargon
- Be cutesy or try too hard
- Apologize for being different

### Copy Formulas

**Headlines**: Bold statements that stop scrolling
- "Getting Shit Done is our Love Language"
- "No games, just great work. For 25 years!"
- "Seeking quality connections"

**Subheads**: Context with personality
- "Don't expect us to wax poetic trying to sell you our Brandmaker 3000™"
- "Between fiery flings and long-term loves, plenty of partners keep coming back"
- "Operators are standing by"

**Body Copy**: Direct, specific, honest
- Short sentences and paragraphs
- Specific numbers ("25 years," "2 minutes")
- Active voice always
- Real talk, no fluff

**CTAs**: Action-oriented with personality
- "Sound like a match?"
- "Let's work together"
- "See what's possible"

### Tone by Context

**Homepage/Marketing**: Bold, confident, slightly irreverent
**About Page**: Authentic, proud but not boastful, relationship-focused
**Portfolio/Case Studies**: Let the work speak, provide context
**Contact/CTA**: Welcoming, direct, no pressure
**Errors/System**: Still human, helpful not apologetic
**Legal/Privacy**: Clear and honest (even here, no corporate speak)

### Voice Examples

**Good Examples**:
✅ "We go all in on solving problems, helping brands thrive, and honestly, just making your lives easier."
✅ "A small super-powered creative agency with zero awards."
✅ "If you love what you do and are proud of your company, your product and your employees, chances are we might fit right in."
✅ "One client described us as 'business therapists.' Indeed, our proverbial chaise is always open."

**Bad Examples** (what Ocupop would never say):
❌ "Leverage synergistic solutions to disrupt the paradigm"
❌ "We're passionate about excellence and committed to delivering best-in-class results"
❌ "Award-winning strategic marketing agency"
❌ "Your success is our success" (too generic)

---

## Logo Usage

### Logo Variations

**Primary Logo**: Ocupop wordmark (black on white)
**Logo on Dark**: White wordmark on dark backgrounds
**Logo Mark**: Ocupop emblem (circular/standalone icon)
**Monochrome**: Single color only - no color variations

**Available Assets**:
- `/assets/ocupop/ocupop-wordmark.svg`
- `/assets/ocupop/ocupop-emblem-white.svg`

### Clear Space
<!-- TODO: is this something our agent will be able to actually impliment, should this be an actual value vs something abstract (logo height) -->
**Minimum Clear Space**:

### Minimum Sizes

**Digital**: 120px width minimum for wordmark
**Digital**: 32px for emblem
**Print**: 1 inch width minimum

### Usage Guidelines

✅ **Do's**:
- Use on clean backgrounds (white or solid colors)
- Maintain clear space religiously
- Scale proportionally always
- Ensure high contrast with background

❌ **Don'ts**:
- Don't add color to logo (always monochrome)
- Don't rotate or skew
- Don't add effects (shadows, gradients, glows)
- Don't place on busy patterns or photos
- Don't stretch or distort

---

## Imagery

> Guidelines for photos, illustrations, icons

### Photography

**Style**: Natural, authentic, documentary-style when featuring people/places
**Mood**: Casual, real, diverse, fun, experience
**Subject Matter**:
- Portfolio work (actual client projects)
- Team in action (no stock photo vibes)
- Client work in context

**Guidelines**:
- Show real work, real people, real results
- Avoid stock photography clichés (handshakes, jumping teams)
- Document actual projects and processes
- Adequate negative space

### Illustrations

**Style**: Abstract compostions made of simple shapes and occasional recognizable objects.
**Color Treatment**: Use brand colors only. Dark border.
**Complexity**: [Moderate]
**Use Cases**: Marketing


### Icons

**Style**: Simple shapes.
**Base Size**: 50px
**Stroke Weight**: 1px

**Guidelines**:
- Decorative over function
- Consistent weight across all icons
- Use brand colors only

---

## Motion & Animation

> Implements principles.md "Interaction" section (Strictness: 🟢 LOW)

### Animation Principles

**Purpose-Driven**: Every animation serves a clear function
**Subtle & Confident**: Enhance don't distract - let work speak
**Performant**: GPU-accelerated properties preferred

### Timing

```css
--duration-instant: 100ms;  /* Immediate feedback */
--duration-fast:    200ms;  /* UI transitions */
--duration-normal:  300ms;  /* Standard animations */
--duration-slow:    500ms;  /* Emphasized animations */

--easing-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
--easing-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Common Animations
<!-- TODO: audit animatations -->
<!--
**Portfolio Card Hover**:
- Transform: translateY(-4px) 300ms
- Shadow: elevate from sm to md
- Image: subtle zoom (1.05x scale) or overlay change

**Button Hover**:
- Background color transition 200ms
- Subtle scale (0.98x on click)

**Page Transitions**:
- Fade 300ms
- Minimal, don't overdo it

**Navigation**:
- Underline slide-in 200ms
- Color transitions 200ms -->

### Accessibility

**Critical**: Always respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Philosophy**: Motion should enhance, never be required for comprehension

---

### Configurable Elements

All brand-specific elements should be configurable via design tokens:

```json
{
  "brandColors": {
    "primary": "#2FA0F8",
    "secondary": "#FF6D39",
    "accent": "#F7B5ED"
  },
  "typography": {
    "fontFamily": "Berlingske Serif",
    "fontFamilyUrl": "https://www.typewolf.com/berlingske-serif"
  },
  "logo": {
    "light": "/logos/brand-logo.svg",
    "dark": "/logos/brand-logo-dark.svg",
    "mark": "/logos/brand-mark.svg"
  },
  "theme": {
    "borderRadius": "999px",
    "shadowStyle": "subtle"
  }
}
```

### Implementation Requirements

**For Developers**:
- All colors must use CSS variables (no hardcoded hex values)
- Logo must be loaded from config/theme
- Typography must support font swapping
- No hardcoded brand-specific text in components


---

## Resources

### Design Files

**Figma**: https://www.figma.com/design/GRIJdwLLQw15Q03ThJ7mMo/Ocupop---Brand-System?node-id=2-314&t=JPl2qbur1ToKyEBm-1
**Assets**: `/assets/ocupop/` directory

<!-- TODO: should we add these/export? -->
### Asset Library

**Logos**: `docs/assets/logos/`
**Icons**: `docs/assets/icons/`
**Illustrations**: `docs/assets/illustrations/`

### Code Resources

**Design Tokens**: `docs/assets/design-tokens.json`
**CSS Variables**: `src/styles/variables.css`
**Component Library**: `src/components/`

---
## Governance

### Update Process

1. Propose change in design review meeting
2. Document rationale for change
3. Update this file with new version number
4. Update design tokens and code
5. Communicate changes to team
6. Update component library if needed

### Approval Authority

**Minor Updates** (color values, spacing tweaks): Design lead
**Major Changes** (new colors, typography): Stakeholder approval required

### Questions?

**Design Lead**: [Nick/n@ocupop.com]
**Stakeholder**: [Tom/t@ocupop.com]

---

## Agent Usage Notes

### For Brand Guardian
- Enforce 🔴 HIGH strictness items automatically
- Flag 🟡 MEDIUM items for human review
- Check white-label compliance

### For Creative Director
- Reference brand personality for strategic decisions
- Use tone/voice for content strategy
- Can propose justified departures from 🟡/🟢 items

### For Art Director
- Use component specs as baseline
- Apply creative expertise within defined bounds
- Document aesthetic decisions

### For UI Analyzer
- Validate against color palette, spacing, typography
- Test component consistency per specs
- Performance checks per animation guidelines

### For Accessibility Champion
- Validate color contrast
- Ensure touch targets meet minimums
- Verify motion respects reduced-motion preference

---

*These guidelines capture Ocupop's authentic, no-BS approach to creative work.*
*Last Updated: 2026-01-26*
*Version: 1.0*

---
