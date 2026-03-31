# Codebase Index - portfolio_nextjs

A modern Next.js portfolio application featuring a modular component-based structure, Mongoose-backed data models, and premium styling with Tailwind CSS 4.

## Tech Stack
- **Framework**: Next.js 15.4.2 (App Router)
- **Styling**: Tailwind CSS 4, Radix UI (Dialog, Separator, Slot, Tooltip)
- **Animations**: Framer Motion
- **Database**: MongoDB (via Mongoose)
- **Icons**: Lucide React

## Project Structure

```bash
.
├── src
│   ├── app
│   │   ├── api         # Backend API routes
│   │   ├── Components  # Feature-specific page sections
│   │   ├── dashboard   # Admin or profile dashboard (Next.js route)
│   │   ├── globals.css # Global styles and Tailwind imports
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page entry point
│   ├── components      # Shared UI components (Radix/Shadcn-like)
│   ├── hooks           # Custom React hooks (e.g., use-mobile)
│   ├── lib             # Core logic and utilities (e.g., mongo connection)
│   └── models          # Mongoose data models
├── public              # Static assets
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Key Modules

### [App Router (src/app)](file:///f:/codes/portfolio_nextjs/src/app)
The project follows the Next.js App Router pattern.
- **Root Page**: [page.tsx](file:///f:/codes/portfolio_nextjs/src/app/page.tsx) aggregates sections from `src/app/Components`.
- **Feature Components**: Unlike typical shared components, the main sections of the home page are located in [src/app/Components](file:///f:/codes/portfolio_nextjs/src/app/Components). These include:
    - `Hero`, `Aboutme`, `Skill`, `Project`, `Experience`, `Contact`, `Navbar`, `Footer`.

### [Models (src/models)](file:///f:/codes/portfolio_nextjs/src/models)
Data structures for the portfolio:
- **[Project.ts](file:///f:/codes/portfolio_nextjs/src/models/Project.ts)**: Stores project details, tech stack, and links.
- **[Experience.ts](file:///f:/codes/portfolio_nextjs/src/models/Experience.ts)**: Professional work history.
- **[Skills.ts](file:///f:/codes/portfolio_nextjs/src/models/Skills.ts)**: Technical capabilities.

### [Lib & Utilities (src/lib)](file:///f:/codes/portfolio_nextjs/src/lib)
- **[mongo.ts](file:///f:/codes/portfolio_nextjs/src/lib/mongo.ts)**: Handles the connection to MongoDB.
- **[utils.ts](file:///f:/codes/portfolio_nextjs/src/lib/utils.ts)**: Common helper functions.

## Development

- **Run Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Environment Setup
Ensure you have a `.env` file with the following variables:
- `MONGODB_URI`: Connection string for your MongoDB instance.
