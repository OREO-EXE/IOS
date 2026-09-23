---
name: Nocturne Campus
colors:
  surface: '#11131a'
  surface-dim: '#11131a'
  surface-bright: '#373941'
  surface-container-lowest: '#0c0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#282a31'
  surface-container-highest: '#33343c'
  on-surface: '#e2e2ec'
  on-surface-variant: '#c8c4d6'
  inverse-surface: '#e2e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#928f9f'
  outline-variant: '#474554'
  surface-tint: '#c7bfff'
  primary: '#c7bfff'
  on-primary: '#2a039d'
  primary-container: '#8e7fff'
  on-primary-container: '#24008c'
  inverse-primary: '#5a49cb'
  secondary: '#45defa'
  on-secondary: '#00363f'
  secondary-container: '#00c2dd'
  on-secondary-container: '#004b56'
  tertiary: '#c7bfff'
  on-tertiary: '#2e1e7d'
  tertiary-container: '#9084e5'
  on-tertiary-container: '#271576'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c7bfff'
  on-primary-fixed: '#170065'
  on-primary-fixed-variant: '#422db2'
  secondary-fixed: '#a5eeff'
  secondary-fixed-dim: '#3cd8f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#e5deff'
  tertiary-fixed-dim: '#c7bfff'
  on-tertiary-fixed: '#180064'
  on-tertiary-fixed-variant: '#453894'
  background: '#11131a'
  on-background: '#e2e2ec'
  surface-variant: '#33343c'
typography:
  display:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
The design system establishes a focused, high-energy academic and social operating system for university life. Engineered for mobile primacy, it captures the electric intimacy of late-night study sessions, dynamic campus networks, and fast-paced collegiate logistics. 

The aesthetic merges the clean modularity of modern productivity tools with the ambient, atmospheric depth of flagship media apps. Interfaces rely on deep nocturnal canvas layers, hairline architectural borders, crisp typography, and targeted micro-glow highlights that spotlight high-priority actions without overwhelming cognitive focus. The visual atmosphere is razor-sharp, focused, tech-forward, and intentionally premium.

## Colors
The color architecture utilizes a tiered nocturnal foundation to establish clear foreground and background relationships without relying on stark contrast.

- **Canvas & Backgrounds:**
  - `Base Canvas`: `#0F1118` — deep void tone grounding all global screens and navigation anchors.
  - `Secondary Background`: `#151821` — grouped sections, scroll gutters, and recessed zones.
  - `Card Background`: `#1B1F2A` — primary actionable containment surfaces.
  - `Elevated Card / Modal`: `#222735` — popovers, sheets, and active focus cards.

- **Accents & Energy:**
  - `Primary Accent`: `#8B7CFF` — radiant lavender-violet driving interactive anchors, selection states, and principal action buttons.
  - `Bright Primary`: `#A89CFF` — elevated glow states, hover states, and active inline highlights.
  - `Secondary Accent`: `#3DD9F5` — electric cyber-cyan reserved for status pings, real-time sync indicators, timetable alerts, and key notifications.

- **Semantics:**
  - `Success`: `#4ADE9A` — grade validations, completed tasks, affirmative feedback.
  - `Warning`: `#F7C65F` — impending deadlines, waitlist changes, low-balance states.
  - `Error`: `#FF6B81` — conflict errors, session drops, missed requirements.

- **Typography & Boundaries:**
  - `Text Primary`: `#F5F6FA` — primary reading layer, high contrast against surfaces.
  - `Text Secondary`: `#A9ADBD` — contextual explanations, sub-headers, and meta badges.
  - `Text Muted`: `#72778A` — placeholders, timestamps, structural labels.
  - `Border / Hairline`: `#2A2E3B` — subtle division lines across all surface tiers.

## Typography
The system balances expressive geometric impact with tabular information density.

- **Headings (Manrope):** Chosen for its sturdy geometric letterforms and modern cut. Used strictly across all section headers, balance readouts, grades, and core metrics. Heavy tracking compression (`-0.01em` to `-0.03em`) produces an authoritative, app-native stance.
- **Body & Labels (Inter):** Deployed for UI control elements, continuous chat strings, schedule grids, and small context tags. Inter provides pristine legibility at micro scales. Tabular figures (`font-variant-numeric: tabular-nums`) must be activated for all grade displays, calendar counters, balances, and course credit totals.

## Layout & Spacing
The layout model follows a strict 8-point base rhythm optimized for 1-hand mobile thumb zones.

- **Grid Structure:** A 4-column fluid layout on mobile viewports (<640px) expanding into an 8-column layout on tablets (640px–1024px) and a fixed-center 12-column frame for desktop dashboards (max-width 1200px).
- **Mobile Margins & Safe Zones:** Canvas side padding defaults to `1rem` (16px) on mobile viewports to maximize usable surface, stepping up to `1.5rem` (24px) on wider tablets. Bottom sheets and navigation elements enforce safe-area-inset padding of `space-xl` (32px) minimum from screen edges.
- **Component Rhythms:** Internal padding for list items and modular cells remains compact (`space-sm` to `space-md`), keeping complex schedules and social feeds scannable within a single screen fold.

## Elevation & Depth
Depth is created through structured tonal steps combined with crisp edge definition rather than heavy drop shadows.

- **Layer Stacking:** 
  - Base View: `#0F1118` (flat background).
  - Base Cards & Feed Items: `#1B1F2A` with a 1px solid border of `#2A2E3B`.
  - Floating Modals, Trays, and Context Drawers: `#222735` with a 1px border of `#2A2E3B` and an ambient perimeter shadow (`0 12px 32px -4px rgba(0, 0, 0, 0.65)`).
- **Micro-Glow Accents:** Key actionable states utilize soft radial halos rather than conventional diffuse shadows. A primary call-to-action button or active event indicator emits a subtle colored aura: `0 4px 20px rgba(139, 124, 255, 0.28)`. Real-time active alerts carry an electric cyan aura: `0 4px 16px rgba(61, 217, 245, 0.24)`.
- **Ghost Outlines:** Dividers and passive containers rely solely on the `#2A2E3B` border token, ensuring zero visual bleed across dark surfaces.

## Shapes
The shape language combines friendly mobile ergonomics with modern, architectural curvature.

- **Base Radius (0.5rem / 8px):** Standard inputs, small badges, inline chips, and menu item hovers.
- **Large Radius (1rem / 16px):** Modular cards, schedule blocks, profile widgets, and banner elements.
- **Extra-Large Radius (1.5rem / 24px):** Bottom sheets, modal frames, and floating action pods.
- **Full Pill Radius (9999px):** Status chips, live indicator pills, avatar badges, and floating bottom tab bars.

## Components

- **Buttons:**
  - *Primary*: Filled `#8B7CFF` background, `#0F1118` bold typography, `1rem` corner radius, height of 48px for thumb ergonomics. Features `box-shadow: 0 4px 20px rgba(139, 124, 255, 0.25)`.
  - *Secondary*: Filled `#1B1F2A`, `#F5F6FA` typography, 1px solid `#2A2E3B` border.
  - *Tertiary / Ghost*: Transparent background, `#A9ADBD` typography, shifting to `#F5F6FA` on press.

- **Chips & Badges:**
  - *Filter / Category Chips*: `#1B1F2A` background, `#2A2E3B` border, full pill geometry (`9999px`), 32px height. When active: border turns `#8B7CFF`, background turns `rgba(139, 124, 255, 0.12)`, text turns `#A89CFF`.
  - *Status Dots*: 6px circular indicators using `#4ADE9A` (active/in-class) or `#3DD9F5` (upcoming), flanked by `label-sm` metadata text.

- **Cards & Feed Containers:**
  - Built with `#1B1F2A` surface and continuous 1px `#2A2E3B` perimeter line. Internal padding of `1rem`. Active press states shift background smoothly to `#222735`.

- **Input Fields:**
  - Height of 48px, `#151821` background, `#2A2E3B` border, rounded to `0.5rem`.
  - Placeholder text styled with `#72778A`. On focus: border shifts to `#8B7CFF` with a subtle `0 0 0 3px rgba(139, 124, 255, 0.15)` focus ring.

- **Lists & Modular Rows:**
  - Edge-to-edge content blocks separated by 1px horizontal dividers (`#2A2E3B`). Left-aligned icon or avatar, center-stacked `headline-sm` title over `body-sm` description, right-aligned tabular metadata or chevron.

- **Checkboxes & Radios:**
  - Checkboxes: 20x20px square with 4px border radius. Unselected: `#151821` background with `#2A2E3B` border. Selected: `#8B7CFF` fill with white checkmark.
  - Radios: 20x20px circle, identical border logic with a centered `#8B7CFF` dot on selection.

- **Ecosystem-Specific: Course / Event Glance Pod:**
  - Dual-column micro-card showing class code (`label-md` in `#3DD9F5`), room number, and time elapsed via a segmented neon progress indicator bar set directly into the bottom card border.