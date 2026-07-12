Plan: Personal portfolio for Data Analyst / Business Analyst job applications

## Goal
Replace the current placeholder homepage with a professional, multi-route portfolio site that showcases projects, work experience, leadership, and skills/contact, optimized for DA/BA job applications.

## Design decisions
- **Layout:** Hero + grid. A strong hero section on the home page, followed by clean grids for projects, experience, and skills.
- **Color palette:** Navy Trust (`#0f1b3d`, `#1e3a5f`, `#3b6fa0`, `#e8edf3`). Professional, corporate, and trustworthy.
- **Typography:** Courier New / system monospace stack. Gives a clean, analytical, technical feel that suits a DA/BA profile.
- **Style:** Minimal, content-first, generous whitespace, subtle borders, and a dark navy hero with light body sections.

## Pages / routes

Create separate TanStack Start route files under `src/routes/`:

1. **Home (`/`)** — Hero with name, title, and one-line summary; quick links to the other sections. This is the landing page.
2. **Projects (`/projects`)** — Grid of project cards. Each card includes: project title, short description, tools used, key metric/outcome, and a link to GitHub or case study (placeholder URLs).
3. **Experience (`/experience`)** — Reverse-chronological timeline of work history. Each role includes company, title, dates, and 2–3 bullet achievements with metrics where possible.
4. **Leadership (`/leadership`)** — Dedicated section for leadership examples, team projects, mentoring, or cross-functional collaboration. This is the extra section the user requested.
5. **Skills & Contact (`/contact`)** — Skills grouped by category (Data Analysis, Visualization, Tools, Soft Skills) and contact info (email, LinkedIn, GitHub) plus a simple contact form placeholder.

## Shared components
- **Header** (`src/components/Header.tsx`) — Sticky top navigation with links to all routes and active-state styling.
- **Footer** (`src/components/Footer.tsx`) — Simple footer with copyright and links.
- **ProjectCard** — Reusable card component for the projects grid.
- **ExperienceItem** — Reusable timeline item for work experience.
- **SectionWrapper** — Consistent section spacing and max-width wrapper.

## Design system updates
- Update `src/styles.css` to add Navy Trust tokens and register them in `@theme inline`.
- Add a monospace font stack to the theme and apply it to headings/body as the user requested.
- Ensure both light and dark modes work with the chosen palette (light as default, dark as a complementary navy-dominant variant).

## SEO / metadata
- Update `src/routes/__root.tsx` with a generic site title and description.
- Add `head()` metadata to each route with unique title, description, og:title, og:description, and og:type.
- Set viewport, charset, and favicon links in the root.

## Content
- Use realistic placeholder content tailored to DA/BA roles (e.g., SQL, Python, Excel, Tableau, Power BI, stakeholder management, A/B testing, dashboards).
- Keep content easy to edit in the route files so the user can replace names, projects, and links with their own details.

## Technical approach
- TanStack Start file-based routing (`src/routes/*.tsx`).
- Tailwind CSS v4 with semantic tokens from `src/styles.css`.
- No backend or database needed — this is a static portfolio site.
- No external dependencies required beyond what is already installed.

## Verification
- Build the app and confirm all routes render without errors.
- Spot-check navigation, mobile responsiveness, and metadata in the head.
- Ensure the placeholder image is removed from the home page.