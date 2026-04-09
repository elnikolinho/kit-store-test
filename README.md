# Test Store

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (New York style)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
├── (legal)/          # Legal pages (terms, privacy, returns)
├── cart/             # Shopping cart
├── repair/           # Jersey repair service
├── shop/
│   ├── jerseys/      # Jerseys catalog
│   ├── merch/        # Merchandise catalog
│   └── [category]/[id]/  # Product detail pages
├── layout.tsx        # Root layout
├── page.tsx          # Home page
└── globals.css       # Global styles

components/
├── ui/               # shadcn/ui primitives
├── header.tsx        # Site header & navigation
├── footer.tsx        # Site footer
├── hero-section.tsx  # Landing hero
├── featured-products.tsx
├── product-grid.tsx
├── shop-filters.tsx
├── search-dialog.tsx
├── repair-form.tsx
└── ...

hooks/                # Custom React hooks
lib/                  # Utility functions
public/               # Static assets
```

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `pnpm dev`    | Start development server |
| `pnpm build`  | Production build         |
| `pnpm start`  | Start production server  |
| `pnpm lint`   | Run ESLint               |
