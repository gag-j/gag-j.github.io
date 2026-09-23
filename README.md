# Gagan Jain — academic website

Live at https://gag-j.github.io/.

The current website source is in `academic-site/`. Run `python3 academic-site/build.py` to generate `academic-site/dist/`, then preview with `python3 -m http.server 8765 --directory academic-site/dist`.

Edit `build.py` for the introduction and page structure, `content/` for background, service, and archived Medium essays, `publications.json` for publications, and `style.css` for the theme.

Pushes to `main` use the existing GitHub workflows to run `npm run build` and publish to the `gh-pages` branch. The original Next.js source and `out/` snapshot are retained; the new build overlays generated pages into `out/`, preserving existing technical article URLs and assets. Old bio, CV, publications, and blog landing URLs redirect to their current destinations.
