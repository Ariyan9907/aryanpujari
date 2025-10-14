# Developer Portfolio

A modern, responsive single-page portfolio for a fresher / entry-level software developer. Built with **HTML**, **CSS**, and **vanilla JavaScript** (no frameworks) for easy hosting on GitHub Pages, Netlify, or any static host.

## Sections Included
- Header / Intro (Name, Title, Social Links, Call-to-Action)
- About Me
- Skills (Grouped)
- Projects (Dynamic injection via `js/main.js` + sample static card)
- Education (Timeline)
- Internships / Training
- Certificates & Achievements
- Resume Download Button
- Contact Form (Netlify-ready) + Direct Links
- Footer

## Quick Start
1. Replace placeholder text in `index.html` (Your Name, links, etc.).
2. Add your profile image at `assets/profile.jpg` (recommended square 600x600).
3. Place your resume PDF at `assets/resume.pdf`.
4. Edit or extend the `projects` array in `js/main.js`.
5. (Optional) Customize colors in `css/style.css` under the `:root` variables.
6. Open `index.html` in a browser to preview.

## Deploy Options
- **GitHub Pages**: Commit and push, then enable Pages on the repo (root). 
- **Netlify**: Drag-and-drop the folder or connect repository.
- **Vercel**: Import repo; no build step required.

## Customizing Projects
Edit the `projects` array inside `js/main.js`:
```js
{
  title: 'AI Fire Detection System',
  desc: 'Detects fire in images using a CNN model and triggers alerts.',
  stack: 'Python, TensorFlow, OpenCV',
  tags: 'AI • Vision',
  github: 'https://github.com/username/fire-detect',
  demo: 'https://your-demo-link'
}
```
Set `demo` to `''` if no live deployment.

## Contact Form Handling
The form has a `netlify` attribute for zero-config Netlify form capture. If you host elsewhere and want dynamic email sending, create an API route or use a service (Formspree, GetForm). Replace the simulated `setTimeout` in `js/main.js` with a real `fetch` call.

## Accessibility & Performance Notes
- Semantic HTML landmarks (header, main, footer, nav, section) used.
- Color contrast chosen for dark theme readability.
- Minimal JS, no heavy dependencies.
- Responsive from mobile (320px) upward.

## Future Enhancements (Ideas)
- Add light/dark theme toggle.
- Add project filtering by tech tags.
- Integrate a blog (`/blog` folder + Markdown rendering).
- Add micro-animations (e.g., GSAP or Framer Motion if moving to React).
- Replace static skills with proficiency bars or radar chart.

## License
You are free to use and modify this template for personal and commercial portfolio purposes. Attribution appreciated but not required.
