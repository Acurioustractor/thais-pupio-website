# Codebase Report: Thais Pupio Design Website
Generated: 2026-02-05

## Summary
This is a portfolio website for **Thais Pupio Design**, an architectural practice based in Byron Bay, Australia. The site showcases sustainable, sensory architectural design with a focus on passive solar principles and biophilic design. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.

## Project Structure
```
src/
  app/                    # Next.js 16 App Router pages
    about/                # About Thais Pupio page
    awards/               # Awards & recognition page
    contact/              # Contact form page
    press/                # Press coverage page
    projects/             # Projects listing & detail pages
      [slug]/             # Dynamic project detail pages
    page.tsx              # Homepage (scroll-based storytelling)
    layout.tsx            # Root layout with Cormorant Garamond font
    globals.css           # Global styles & design tokens
  components/
    layout/               # Header, Footer, MobileNav
    ui/                   # Reusable UI components
      FadeInOnScroll.tsx
      FullBleedImage.tsx
      FullBleedVideo.tsx
      ParallaxSection.tsx
      ProjectCard.tsx
      ScrollIndicator.tsx
      ScrollSnapContainer.tsx
      ScrollSnapSection.tsx
      TextOverlay.tsx
  data/                   # Content & configuration
    site.ts               # Site config, philosophy, bio
    projects.ts           # Project data with sections
    awards.ts             # Awards list
    press.ts              # Press coverage
  hooks/                  # Custom React hooks
    useIntersectionObserver.ts
    useReducedMotion.ts
  types/
    index.ts              # TypeScript interfaces

public/
  images/
    about/                # Portrait photos
    press/                # Press publication logos
    projects/
      earthen-retreat/    # ~10 high-quality project photos
      byron-bay-renovation/
      suffolk-park-house/
      clunes-house/
  videos/                 # Hero & interlude videos (MP4)
```

## 1. What Kind of Website Is This?

### Framework & Technology
- **Next.js 16** with App Router (latest version)
- **React 19** with TypeScript
- **Tailwind CSS 4.1** (v4, using new `@theme` syntax)
- **Server Components** by default, with Client Components for interactivity
- **Image Optimization** via next/image with AVIF/WebP formats

### Website Type
**Architecture Portfolio** with:
- Immersive scroll-based storytelling homepage
- Project showcase with filtering
- Full-screen images and videos with parallax effects
- Scroll-snap sections for About page
- Contact form (via Formspree)
- Press & awards pages

### Design Approach
- **High-end editorial aesthetic** with full-bleed media
- **Scroll-driven narrative** with parallax and fade-in animations
- **Minimal UI** - lets the photography shine
- **Accessibility considerations** - reduced motion support

## 2. Brand Guide & Design Tokens

### Colors (from globals.css)

**Stone Palette** (primary neutral)
```css
--color-stone-50: #fafaf9   /* Lightest - backgrounds */
--color-stone-100: #f5f5f4
--color-stone-200: #e7e5e4  /* Borders */
--color-stone-300: #d6d3d1
--color-stone-400: #a8a29e  /* Muted text */
--color-stone-500: #78716c  /* Secondary text */
--color-stone-600: #57534e
--color-stone-700: #44403c  /* Links */
--color-stone-800: #292524
--color-stone-900: #1c1917  /* Primary text */
```

**Earth Palette** (accent, warm tones)
```css
--color-earth-50: #fdf8f0   /* Subtle backgrounds */
--color-earth-100: #f5ebe0
--color-earth-200: #e8d5c0
--color-earth-300: #d4b896
--color-earth-400: #c49a6c
--color-earth-500: #a67c52
--color-earth-600: #8b6544
--color-earth-700: #6f4f36
--color-earth-800: #523a28
--color-earth-900: #3a2819
```

### Typography

**Primary Font**
- **Cormorant Garamond** (serif) - Google Font
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Used for all text across the site
- Variable: `--font-serif`
- Fallbacks: Georgia, Times New Roman, serif

**Type Styles**
- **Headlines**: 3xl-7xl, font-light, tracking-wide
- **Body**: lg-xl, font-light, leading-relaxed
- **Labels**: sm, tracking-[0.15em-0.2em], uppercase, stone-400/500
- **Emphasis**: All caps with wide letter spacing for labels/nav

### Spacing & Layout
- **Container**: max-w-7xl for main content
- **Padding**: px-6 (mobile), md:px-12 (desktop)
- **Vertical rhythm**: py-32 md:py-40 for sections
- **Gaps**: gap-6 to gap-10 for grids

### Visual Effects

**Gradient Overlays** (for text on images)
```css
.gradient-overlay-bottom {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
}

.gradient-overlay-full {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.15) 100%
  );
}
```

**Animations**
- Smooth scroll behavior (respects prefers-reduced-motion)
- Scroll-snap for About page
- Fade-in on scroll via Intersection Observer
- Parallax effects on homepage

### Button/Link Styles

**Primary Button**
```tsx
text-sm tracking-[0.2em] uppercase 
border border-stone-900 px-8 py-3
hover:bg-stone-900 hover:text-white
transition-colors
```

**Text Link**
```tsx
text-sm tracking-[0.2em] uppercase
border-b border-stone-300 pb-1
hover:border-stone-800 hover:text-stone-800
transition-colors
```

## 3. Existing Copy/Content Files

All content is stored in **TypeScript data files** at `/Users/benknight/Code/Thais Website/src/data/`:

### site.ts
Contains:
- **Site config**: name, title, description, URL, navigation
- **Contact info**: email, phone, location, Formspree ID
- **Social links**: Instagram
- **Philosophy**: headline & body text for homepage
- **Bio**: Thais Pupio's background, practice details

**Key Copy:**
- Philosophy headline: "Architecture that breathes with the land"
- Practice founded: 2004
- Location: Byron Bay, NSW
- Focus: "Residential & Boutique Commercial"
- Approach: "Passive Solar, Biophilic, Locally Sourced Materials"

### projects.ts
**4 projects** with detailed metadata:

1. **Earthen Retreat** (2022) - Featured project
   - Rammed-earth home in Byron Bay Hinterland
   - 18 sections with hero images, text, image pairs, credits
   - ~15 high-res photos

2. **Byron Bay Renovation** (2023)
   - 1980s brick home transformation
   - 4 sections with photos

3. **Suffolk Park House** (2021)
   - Coastal family home
   - Minimal content (Coming Soon photos)

4. **Clunes House** (2020)
   - Compact farmhouse with recycled timber
   - Minimal content (Coming Soon photos)

Each project has:
- Title, location, year, category
- Description (150-200 words)
- Thumbnail image
- Sections array (hero, text, image, image-pair, credits)

### awards.ts
**3 awards** listed:
- Master Builders Association - Winner (Earthen House)
- Housing Industry Australia - Winner (Earthen House)
- Housing Industry Australia - Renovations Project Winner (Byron Bay Renovation)

### press.ts
**4 press items:**
- Habitus Living (Magazine Issue 46)
- The Local Project
- Inside Gold Coast (Erva Nail Spa)
- Stir World

## 4. Figma References or Design System Files

**No Figma files found** in the repository.

Design tokens are defined directly in:
- `/Users/benknight/Code/Thais Website/src/app/globals.css` (color tokens)
- Tailwind CSS classes used throughout components

The design system is implemented as:
- Color variables in CSS `@theme` block
- Consistent component patterns (TextOverlay, FadeInOnScroll, etc.)
- Reusable UI components in `/src/components/ui/`

## 5. The Client/Business

### Business: Thais Pupio Design

**Architect**: Thais Pupio
- Brazilian-born architect
- Based in Byron Bay, Australia
- 20+ years of experience
- Founded: 2004

**Practice Focus**
- Residential architecture
- Boutique commercial projects
- Sustainable design
- Passive solar principles
- Biophilic design
- Locally sourced materials

**Philosophy**
"We design spaces rooted in place — shaped by sunlight, breeze, and the rhythms of daily life. Drawing on passive solar principles, biophilic design, and locally sourced materials, each project is a quiet conversation between architecture and nature."

**Service Area**
- Byron Bay hinterland
- Northern Rivers region, NSW
- Beyond (willing to travel)

**Collaborators**
- Builders (e.g., Byron Hinterland Constructions)
- Artisans
- Landscape designers (e.g., Native Edge Landscapes)

**Contact**
- Email: hello@thaispupio.com
- Phone: +61 2 6685 0000
- Location: Byron Bay, NSW, Australia
- Instagram: @thaispupiodesign

## 6. Current Pages and Components

### Pages (Routes)

| Route | Purpose | Key Features |
|-------|---------|--------------|
| `/` | Homepage | Scroll storytelling, parallax sections, full-bleed video/images |
| `/about` | About Thais | Scroll-snap sections, portrait, bio, practice details |
| `/projects` | Projects listing | Filterable grid, categories (All/Residential/Renovation) |
| `/projects/[slug]` | Project detail | Dynamic sections (hero, text, images, image pairs, credits) |
| `/contact` | Contact form | Split layout, Formspree integration |
| `/press` | Press coverage | Grid of press logos/links |
| `/awards` | Awards & recognition | Awards grid with project images |

### Layout Components

**Header** (`/src/components/layout/Header.tsx`)
- Fixed position
- Transparent on dark pages (/, /about, /projects/[slug])
- Solid white on light pages
- Changes on scroll (50px threshold)
- Desktop nav + mobile hamburger
- Tracks scroll on both window and snap containers

**Footer** (`/src/components/layout/Footer.tsx`)
- Site name, location
- Navigation links
- Copyright notice

**MobileNav** (`/src/components/layout/MobileNav.tsx`)
- Full-screen overlay
- Navigation menu

### UI Components

| Component | Purpose | Location |
|-----------|---------|----------|
| FadeInOnScroll | Intersection Observer fade-in | `/src/components/ui/FadeInOnScroll.tsx` |
| FullBleedImage | Full-viewport image with object-cover | `/src/components/ui/FullBleedImage.tsx` |
| FullBleedVideo | Full-viewport video with autoplay/loop | `/src/components/ui/FullBleedVideo.tsx` |
| ParallaxSection | Parallax scroll effect container | `/src/components/ui/ParallaxSection.tsx` |
| ProjectCard | Project thumbnail card with hover | `/src/components/ui/ProjectCard.tsx` |
| ScrollIndicator | Animated down arrow | `/src/components/ui/ScrollIndicator.tsx` |
| ScrollSnapContainer | Scroll-snap wrapper (100vh sections) | `/src/components/ui/ScrollSnapContainer.tsx` |
| ScrollSnapSection | Individual snap section | `/src/components/ui/ScrollSnapSection.tsx` |
| TextOverlay | Positioned text over images/videos | `/src/components/ui/TextOverlay.tsx` |

### Custom Hooks

| Hook | Purpose | File |
|------|---------|------|
| useIntersectionObserver | Detects element visibility | `/src/hooks/useIntersectionObserver.ts` |
| useReducedMotion | Checks prefers-reduced-motion | `/src/hooks/useReducedMotion.ts` |

## Brand Assets Inventory

### Images
Located in `/Users/benknight/Code/Thais Website/public/images/`

**About**
- `thais-portrait.jpg` - Portrait photo

**Press**
- `habitus-living.png`
- `local-project.png`
- `inside-gold-coast.jpg`
- `stir-world.jpg`

**Projects**
- earthen-retreat/ - ~15 images (exterior, interior, details)
- byron-bay-renovation/ - 4 images
- suffolk-park-house/ - 1 image (exterior)
- clunes-house/ - 1 image (interior)

### Videos
Located in `/Users/benknight/Code/Thais Website/public/videos/`
- `hero-placeholder.mp4` - Homepage hero
- `project-01.mp4` - First interlude
- `project-02.mp4` - Second interlude
- `project-03.mp4` - Final CTA section

### Favicon
- `/Users/benknight/Code/Thais Website/src/app/favicon.ico`

## Technical Stack Summary

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.4 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Tailwind CSS | 4.1.18 | Utility-first CSS |
| PostCSS | 8.5.6 | CSS processing |
| ESLint | 9.39.2 | Linting |

**Build Commands**
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Linting

## Design Patterns & Conventions

### Naming
- **Files**: kebab-case (`scroll-indicator.tsx`)
- **Components**: PascalCase (`ScrollIndicator`)
- **Data files**: camelCase exports (`siteConfig`, `projects`)

### Component Structure
- Server Components by default
- "use client" directive for interactive components
- TypeScript interfaces in `/src/types/index.ts`

### Content Management
- All content in TypeScript data files (no CMS)
- Strongly typed with interfaces
- Easy to update without touching components

### Styling
- Tailwind utility classes
- Custom CSS variables in globals.css
- Consistent spacing/color tokens

### Accessibility
- Semantic HTML
- Alt text on all images
- Reduced motion support
- Keyboard navigation
- ARIA labels on buttons

## Key Files for Modification

| File | Purpose | When to Edit |
|------|---------|--------------|
| `/src/data/site.ts` | Site-wide config, contact info, philosophy, bio | Update brand copy |
| `/src/data/projects.ts` | Project data & images | Add/edit projects |
| `/src/data/awards.ts` | Awards list | Add awards |
| `/src/data/press.ts` | Press coverage | Add press |
| `/src/app/globals.css` | Design tokens (colors) | Adjust brand colors |
| `/src/app/page.tsx` | Homepage layout | Change homepage structure |

## Next Steps / Recommendations

1. **Add more project content** - Suffolk Park House and Clunes House have minimal content
2. **Add videos** - Video files are referenced but may be placeholders
3. **Social media** - Only Instagram linked, could add more platforms
4. **Blog/Insights** - Consider adding a blog or insights section
5. **Image optimization** - Ensure all images are optimized (using next/image)
6. **SEO** - Add more metadata, structured data for projects
7. **Analytics** - No analytics found, consider adding
8. **Performance** - Test Core Web Vitals with large media files
