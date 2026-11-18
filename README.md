# Mohamed Bouaicha, portfolio

Static site: plain HTML, CSS and JavaScript. No build step, no dependencies.

## Structure
- `index.html` the page. Sections: services (doors), work (case studies), why, process, lab, about, faq, contact.
- `css/` tokens.css (all colours, fonts, spacing, motion values) > base > layout > components > sections > animations (all decorative motion, gated by prefers-reduced-motion).
- `js/main.js` doors, mobile menu, reel switcher, form validation, reveal on scroll. No-JS and reduced-motion users see all content.
- `fonts/` self-hosted woff2 (Bricolage Grotesque 700, Instrument Sans 400/500/600).
- `assets/img/` optimized WebP images. `assets/projects/video/` the three reels (mp4) and posters.
- `vercel.json` security headers (strict CSP: no inline scripts or styles, so keep it that way), cache headers, clean URLs. `404.html` is served by Vercel for unknown paths.
- `og.jpg` 1200x630 social preview. `favicon.svg`, `robots.txt`, `sitemap.xml`.

## Before launch (placeholders and open items)
1. **Site URL**: canonical, og:url, og:image, robots.txt and sitemap.xml use `https://mohamed-bouaicha-portfolio-mbouaicha550-1956.vercel.app`. If you add a custom domain, replace it in those four places.
2. **Project links not available yet**: STREET HUSTLE and Draimenzia show "No public link yet." Replace that `<p class="st">` with `<a class="lk" href="URL" target="_blank" rel="noopener">View project</a>` when a link exists. The French dental concept has no link yet; add one next to "View Arabic concept" in the first case study.
3. **Testimonials**: none are shown because none exist. Add a section only with real, permitted quotes.
4. **LinkedIn and Fiverr** are not shown. Add them in the contact list when you have the URLs.
5. **Clients**: the reels are labelled "Client edit" and no client names are listed. Reel 1 shows a client's branding inside the video; confirm they agree.
6. **Facts to re-confirm**: SPHERE status ("presented to the owner, who liked it") and payment on delivery for video.
7. Better screenshots: current phone screenshots are low resolution. Replace the files in `assets/img/` keeping the same names.
8. The inquiry form does not send to a server. It validates, then opens WhatsApp or the visitor's email app with the message ready. Nothing is stored. To collect submissions you would add a form service later.

## Deploy
From this folder, with the Vercel CLI: `npx vercel --prod` (pass `--scope <team>` if you use a team). Or push the folder to GitHub and import it in Vercel with no build command and no framework. After deploying, open the live URL on a phone and test the WhatsApp button and the form.
