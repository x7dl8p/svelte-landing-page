# Image Enhancement Landing Page

A modern, responsive landing page for an AI-powered image enhancement service built with SvelteKit. Features bilingual support (English/Arabic) and a sleek, professional design.

## ENG :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/cffce4da-6178-42ec-b90a-6604ac6da4a2" />

## AR :
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c7ec4bb3-c07b-4443-a8f1-dc71d4fe3a58" />


## Features

- **AI-Powered Image Enhancement**: Restore fidelity pixel by pixel with advanced algorithms
- **Bilingual Support**: Full internationalization with English and Arabic (Emirati dialect)
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Built with Tailwind CSS and custom components
- **Performance Optimized**: Fast loading with SvelteKit's SSR capabilities
- **SEO Ready**: Server-side rendering for better search engine optimization

## Tech Stack

- **Framework**: [SvelteKit](https://svelte.dev/docs/kit/introduction) - The fastest way to build Svelte apps
- **Language**: TypeScript for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Internationalization**: [Paraglide JS](https://inlang.com/m/paraglide-js) - Type-safe i18n
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Package Manager**: [pnpm](https://pnpm.io/) - Efficient package management
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime (optional)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/x7dl8p/svelte-test.git
   cd svelte-test
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Prepare internationalization**
   ```bash
   pnpm run prepare
   ```

## Development

After updating a internationalization:

```bash
# Using pnpm
pnpm run prepare
```

Start the development server:

```bash
# Using pnpm
pnpm run dev
```

The application will be available at `http://localhost:5173`.

## Building for Production

Build the application for production:

```bash
pnpm run build
```

Preview the production build locally:

```bash
pnpm run preview
```

## Internationalization

This project supports two languages:

- **English** (`en`) - Default language
- **Arabic** (`ar`) - Spoken Emirati professional non-formal Arabic

### Language Files

- `messages/en.json` - English translations
- `messages/ar.json` - Arabic translations

### Switching Languages

The navbar includes a language toggle button that allows users to switch between English and Arabic. The selected language is persisted and affects all text content throughout the application.

## Project Structure

```
└── 📁src
    └── 📁lib
        └── 📁assets
            ├── favicon.svg
        └── 📁components
            ├── Badge.svelte
            ├── Benchmarks.svelte
            ├── CaseStudies.svelte
            ├── CaseStudyCard.svelte
            ├── FAQ.svelte
            ├── FeatureGrid.svelte
            ├── Footer.svelte
            ├── GridBackground.svelte
            ├── Hero.svelte
            ├── Integration.svelte
            ├── Nav.svelte
            ├── Pricing.svelte
            ├── PricingCard.svelte
            ├── Resources.svelte
            ├── SectionShell.svelte
            ├── SpecCard.svelte
            ├── Terminal.svelte
            ├── TickBox.svelte
            ├── TrustStrip.svelte
            ├── Visualizer.svelte
            ├── .gitignore
            ├── .prettierignore
            ├── messages.js
            ├── registry.js
            ├── runtime.js
            ├── server.js
        ├── index.ts
    └── 📁routes
        └── 📁demo
            └── 📁paraglide
                ├── +page.svelte
            ├── +page.svelte
        ├── +layout.svelte
        ├── +page.svelte
        ├── layout.css
    └── 📁types
        ├── async_hooks.d.ts
    ├── app.d.ts
    ├── app.html
    ├── hooks.server.ts
    └── hooks.ts
```

## Components

### Core Components
- **Hero**: Main landing section with key messaging
- **Nav**: Navigation bar with language switcher
- **TrustStrip**: Social proof and trust indicators
- **FeatureGrid**: Feature showcase grid
- **Pricing**: Pricing plans and billing toggle
- **CaseStudies**: Customer success stories
- **Benchmarks**: Performance comparisons
- **Resources**: Documentation and resources
- **FAQ**: Frequently asked questions
- **Integration**: Integration guides
- **Footer**: Site footer with links

### Utility Components
- **Badge**: Status and feature badges
- **GridBackground**: Animated background grid
- **SectionShell**: Section wrapper component
- **SpecCard**: Specification display cards
- **Terminal**: Code terminal simulator
- **TickBox**: Feature checklist items
- **Visualizer**: Data visualization component

## Scripts

- `pnpm run dev` - Start development server
- `pnpm run build` - Build for production
- `pnpm run preview` - Preview production build
- `pnpm run check` - TypeScript type checking
- `pnpm run prepare` - Generate Paraglide i18n files

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
