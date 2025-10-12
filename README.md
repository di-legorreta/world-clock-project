World Clock — Pixel UI

A lightweight, accessible world clock that displays live date and time for multiple cities with a retro pixel aesthetic. Built with vanilla HTML/CSS/JavaScript and Moment Timezone.

Demo

Live: https://world-clock-project.pages.dev/

Code: <this repository>

Features

Four default city panels (e.g., Los Angeles, Sydney, Tokyo, Paris)

City selector to view a different city on demand

Live updates every second via setInterval

Accurate time zones using moment-timezone

Responsive layout and keyboard-friendly controls

Tech Stack

HTML5, CSS3 (Grid/Flex)

JavaScript (ES6)

Moment.js
 and Moment Timezone

Project Structure
/
├─ index.html
├─ src/
│  ├─ styles.css
│  └─ index.js
└─ images/        (optional)

How It Works

On load, index.js renders four predefined cities.

A one-second interval recomputes each city’s current time with moment().tz(<zone>) and updates the DOM.

The city dropdown can replace the grid with a single “selected city” view (depending on your implementation).

Date/time formats use Moment (e.g., MMMM Do YYYY, h:mm:ss A).

Getting Started
1) Clone
git clone <repo-url>
cd world-clock

2) Open locally

Open index.html in a browser, or use a simple static server:

npx http-server -p 8080
# visit http://localhost:8080

3) Include libraries (CDN)

Ensure these scripts are included in index.html before your index.js:

<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.37/moment-timezone-with-data-1970-2030.min.js"></script>
<script src="src/index.js" defer></script>

Configuration
Add or change default cities

Each city section in index.html should have an id and contain .date and .time elements:

<section id="paris" class="row">
  <div>
    <div class="city">Paris</div>
    <div class="date"></div>
  </div>
  <div class="time"></div>
</section>


Register it in your updater (e.g., inside refreshClocks()):

renderCity("paris", "Europe/Paris");

Dropdown cities

Use valid IANA time zone identifiers as <option value=""> values:

<select id="city-select">
  <option value="">Choose a city…</option>
  <option value="Europe/London">London</option>
  <option value="America/New_York">New York</option>
  <option value="Asia/Dubai">Dubai</option>
</select>


Handle change events with moment().tz(selectedValue).

Styling & Theming

Uses CSS custom properties for quick theme swaps. Example:

:root{
  --screen: #e6f4ff;   /* background accent */
  --panel:  #eef6e4;   /* panel fill */
  --bezel:  #5c8a3d;   /* borders */
  --ink:    #2a3a2a;   /* text */
  --shadow-deep:  #3e6b2f;
  --shadow-panel: #94b36a;
}


Replace hardcoded colors in gradients/shadows with variables to switch themes globally.

Accessibility

Keyboard focus styles preserved on interactive elements.

Sufficient touch target sizes for select and buttons.

Visual updates occur every second; screen readers are not forced to announce each tick.

Deployment

Static hosting works on Cloudflare Pages, Netlify, GitHub Pages, or AWS S3 + CloudFront.

If using a CDN, set sensible cache headers and invalidate on deploys.

Known Limitations

Moment.js is in maintenance mode; for new projects consider Luxon or date-fns-tz.

The “selected city” view and four-city grid are mutually exclusive in this version.

Roadmap

Auto-detect user time zone (moment.tz.guess() or Intl.DateTimeFormat().resolvedOptions().timeZone)

Favorite cities stored in localStorage

24h/12h toggle

Copy current time to clipboard

Optional migration from Moment to Luxon

Credits

Built during SheCodes Plus, SheCodes Plus AI, and SheCodes Plus Add-On.

Time zone data via Moment Timezone (CDN).

License

MIT.
