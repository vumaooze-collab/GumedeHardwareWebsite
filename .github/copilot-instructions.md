# Project guidance

- Keep the app on Next.js App Router, React, strict TypeScript and Tailwind CSS.
- Keep business contact/configuration in `src/config/business.ts`; do not duplicate phone numbers or WhatsApp configuration in components.
- Keep catalog records typed in `src/types/catalog.ts` and `src/data/products.ts`. Replace the data source behind components when integrating the future REST API.
- Use semantic HTML, descriptive image alt text, keyboard-visible focus and responsive layouts.
- Do not invent business claims, prices, hours, reviews, certifications or contact details. Keep unknown details visibly marked for owner confirmation.
- The contact form is a local frontend demonstration only. Do not imply it sends or stores messages until it is connected to an API.