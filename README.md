# Gumede Hardware

A responsive storefront demonstration for Gumede Hardware in Mzuzu, Malawi. Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Getting started

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and enter the business WhatsApp number in international format (digits only, including Malawi country code). The business phone is a separate display value.
3. Start the local site with `npm run dev` and open `http://localhost:3000`.

Run `npm run lint`, `npm run typecheck`, and `npm run build` before deployment. `npm run build` produces the static site in `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the static export when changes are pushed to `main`. In the repository settings, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Project-site builds automatically use the repository name as their base path; repositories named `<owner>.github.io` are treated as user/organization sites.

## Business data

Business details are centralized in `src/config/business.ts`. Product and category content is typed and currently lives in `src/data/products.ts`; the product catalog can later be replaced with a REST data provider without changing the card interface.

The contact form currently validates locally and does not transmit or store submissions. Connect it to a REST API before accepting live enquiries. Product photos are visual placeholders sourced from Unsplash and should be replaced with owner-approved product photography for launch.