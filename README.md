# Sri Maha Laxmi Embroidery — Next.js Landing Page

Premium boutique landing page for a traditional embroidery brand.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll animations & micro-interactions
- **React Three Fiber + Drei** — interactive 3D embroidery hoop
- **next/image** — optimized image loading

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Project Structure

```
sri-maha-laxmi-embroidery/
├── app/
│   ├── globals.css          # Fonts, custom utilities, scrollbar
│   ├── layout.tsx           # Root layout + SEO metadata
│   └── page.tsx             # Main page (composes all sections)
├── components/
│   ├── Navbar.tsx           # Sticky nav with mobile drawer
│   ├── Hero.tsx             # Full-screen hero with floating animation
│   ├── GalleryGrid.tsx      # Masonry grid with hover overlays
│   ├── EmbroideryFrame3D.tsx # 3D section wrapper (lazy loads canvas)
│   ├── EmbroideryCanvas.tsx  # React Three Fiber 3D hoop scene
│   ├── About.tsx            # Split layout artisan story
│   ├── FeaturedCollection.tsx # Horizontal snap-scroll carousel
│   ├── Testimonials.tsx     # Client quote cards
│   ├── Contact.tsx          # WhatsApp-integrated contact form
│   └── Footer.tsx           # Links, social, copyright
├── public/
│   └── images/              # Place local WebP images here
├── tailwind.config.js
├── next.config.mjs
└── tsconfig.json
```

## Design System

| Token       | Value       |
|-------------|-------------|
| Primary     | `#6A0D25` (Deep Maroon) |
| Secondary   | `#D4AF37` (Gold) |
| Background  | `#FDF6EC` (Cream) |
| Heading Font | Playfair Display |
| Body Font   | Inter |
| Accent Font | Cormorant Garamond |

## Customization

### Update Contact Details
In `components/Contact.tsx`, change the WhatsApp number:
```tsx
const whatsappLink = `https://wa.me/91XXXXXXXXXX?text=...`
```

### Replace Images
The project uses Unsplash images by default. Replace with your own by:
1. Adding WebP images to `public/images/`
2. Updating the `src` props in `GalleryGrid.tsx` and `FeaturedCollection.tsx`
3. Add the domain to `next.config.mjs` if using external URLs

### 3D Scene
The rotating embroidery hoop is in `components/EmbroideryCanvas.tsx`. Customize:
- Colors via `goldColor`, `maroonColor`, `creamColor` variables
- Rotation speed via `useFrame` delta multipliers
- Add/remove rings, petals, threads in the JSX

## Performance Notes

- 3D canvas is **dynamically imported** (no SSR) to keep initial bundle small
- All images use `loading="lazy"` except the hero (which uses `priority`)
- Tailwind purges unused classes in production build
- Framer Motion animations trigger only when elements enter viewport (`useInView`)

## Build for Production

```bash
npm run build
npm start
```
