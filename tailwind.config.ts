import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: ['selector', '[data-theme="contrast"]'],
  theme: {
    extend: {
      // Map your spacing scale
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
        '6xl': 'var(--spacing-6xl)',
      },
      // Map your colors
      colors: {
        // Base grays
        gray: {
          0: 'var(--gray-0)',
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
          9: 'var(--gray-9)',
          10: 'var(--gray-10)',
          11: 'var(--gray-11)',
          12: 'var(--gray-12)',
        },
        // Semantic colors
        brand: 'var(--color-brand)',
        'brand-muted': 'var(--color-brand-muted)',
        'brand-subtle': 'var(--color-brand-subtle)',
        text: {
          DEFAULT: 'var(--color-text)',
          strong: 'var(--color-text-strong)',
          muted: 'var(--color-text-muted)',
          'on-muted': 'var(--color-text-on-muted)',
          'on-brand': 'var(--color-text-on-brand)',
          inverse: 'var(--color-text-inverse)',
        },
        bg: {
          DEFAULT: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          muted: 'var(--color-bg-muted)',
          accent: 'var(--color-bg-accent)',
          highlight: 'var(--color-bg-highlight)',
          brand: 'var(--color-bg-brand)',
          'brand-muted': 'var(--color-bg-brand-muted)',
          inverse: 'var(--color-bg-inverse)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          inputs: 'var(--color-border-inputs)',
          strong: 'var(--color-border-strong)',
          subtle: 'var(--color-border-subtle)',
        },
        link: {
          DEFAULT: 'var(--color-link)',
          hover: 'var(--color-link-hover)',
        },
        state: {
          hover: 'var(--color-state-hover)',
          active: 'var(--color-state-active)',
        },
        'focus-ring': 'var(--color-focus-ring)',
        error: 'var(--color-error)',
        overlay: 'var(--color-overlay)',
      },
      // Map your border radius
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        '4xl': 'var(--radius-4xl)',
        'full': 'var(--radius-full)',
      },
      // Map your font families
      fontFamily: {
        body: 'var(--font-body)',
        headings: 'var(--font-headings)',
        mono: 'var(--font-mono)',
      },
      // Map your font sizes
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        'heading-xs': 'var(--font-size-heading-xs)',
        'heading-sm': 'var(--font-size-heading-sm)',
        'heading-md': 'var(--font-size-heading-md)',
        'heading-lg': 'var(--font-size-heading-lg)',
        'heading-xl': 'var(--font-size-heading-xl)',
        'heading-2xl': 'var(--font-size-heading-2xl)',
        'heading-3xl': 'var(--font-size-heading-3xl)',
        'heading-4xl': 'var(--font-size-heading-4xl)',
      },
      // Map your font weights
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },
      // Map your animations
      transitionDuration: {
        fast: 'var(--animation-fast)',
        normal: 'var(--animation-normal)',
        slow: 'var(--animation-slow)',
      },
      // Map your content widths
      maxWidth: {
        'content-xs': 'var(--content-width-xs)',
        'content-sm': 'var(--content-width-sm)',
        'content-md': 'var(--content-width-md)',
        'content-lg': 'var(--content-width-lg)',
        'content-xl': 'var(--content-width-xl)',
        'content-2xl': 'var(--content-width-2xl)',
        'content-3xl': 'var(--content-width-3xl)',
      },
      // Breakpoints already match Tailwind defaults, but keeping for reference
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
} satisfies Config;
