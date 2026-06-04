<p><a href="https://jobs.telusdigital.com/"><img src="https://doylesee.github.io/tls-cws/thumbnail.jpeg" /></a></p>

<h2>Project Overview</h2>
<pre>
<b>Project:</b>   TELUS Career Site
<b>Role:</b>      UI Developer & Accessibility/UX Consultant
<b>Timeline:</b>  2 Weeks (Accelerated from a 7-week initial estimate)
<b>Tools:</b>     Liquid Markup, HTML5, CSS3, JavaScript / jQuery, Foundation, Figma
</pre>
&nbsp;<strong><a href="https://jobs.telusdigital.com/">View project</a></strong>

<br />
##The Challenge
The client required a highly complex, custom career portal based on high-fidelity Figma designs provided by their third-party marketing agency. However, the project presented two massive hurdles:

<strong>Compressed Timeline</strong><br />
A project originally scoped and quoted for a 7-week delivery window was heavily accelerated by the client, demanding full execution in just 2 weeks.

<strong>CMS Technical Limitations</strong><br />
The CMS backend architecture was highly restrictive, offering content administrators nothing more than a primitive, single-field WYSIWYG editor. This made it virtually impossible for non-technical users to build or manage modern, multi-column layouts, or complex media sections.<br />
Compounding this challenge was the requirement for full multi-lingual support, requiring the custom layouts to dynamically support both English and French localized content.

<br /><h2>Core Objectives</h2>
<strong>Design Optimization & Quality Assurance</strong><br />
Audit Figma designs to patch technical usability gaps, user flow oversights, and web accessibility flaws before development.

<strong>Rapid Component Development</strong><br />
Build a comprehensive UI library using Foundation, ensuring flawless responsiveness and cross-browser performance under a critical deadline.

<strong>Semantic & Accessible Coding</strong><br />
Implement native semantic markup to optimize search engine indexing (SEO) and strict WCAG compliance for screen readers.

<strong>No-Code Layout Engine (The Hybrid CMS)</strong><br />
Build a bespoke compiler inside the frontend template layer that translates basic text markers from a WYSIWYG editor into advanced layout rows automatically.

<strong>Dynamic Localization</strong><br />
Implement the frontend to seamlessly support multi-language localized content (English and French), ensuring a unified user experience and proper SEO indexing for both regions.

<br /><h2>My Approach & Implementation</h2>
<h3>1. UX Consulting & Pre-Development Audit</h3>
Leveraging my senior frontend experience in both design and development, I intercepted the creative agency’s designs early on. I discovered and flagged critical missing details, including missing hover/active interactive states, and severe web accessibility compliance gaps. By actively providing concrete solutions and layouts, I enabled the marketing team to quickly update the designs, mitigating production bottlenecks before coding began.

<h3>2. Engineering the WYSIWYG-to-Layout Compiler</h3>
To bypass the constraints of the primitive CMS, I utilized Liquid Markup to engineer an abstract parsing engine. Non-technical administrators could now build highly complex, responsive components simply by typing simple text markers (e.g., SECTION CAROUSEL START) directly around their text inside the WYSIWYG editor. Furthermore, I designed this layout engine to be fully localized. By tying the parsed sections to page tags and Liquid language variables, the compiler automatically rendered localized UI text strings (such as form buttons, ARIA labels, and navigation paths) in either English or French based on the user's active locale, ensuring zero content-drift across both versions of the career site.

My backend Liquid script intercepts these blocks, isolates the text content, cleans formatting white spaces, and loops through a dynamic configuration matrix to seamlessly insert the underlying modular Foundation code.

<h3>3. Automated Theme Variations & Global Optimization</h3>
I programmed the layout engine to handle inline configuration hooks. If an administrator includes a tag like background-1, the compiler automatically detects if that style corresponds to a dark palette and dynamically appends utility classes like background-dark to guarantee proper color-contrast ratios for web accessibility.

Additionally, to optimize performance under the tight deadline, I added an automated asset optimization routine directly into the loop: it automatically flags and injects native loading="lazy" tags onto images appearing below the fold, resulting in faster initial page loads.

<br /><h2>Results & Impact</h2>
<strong>High-Speed Delivery</strong><br />
Successfully launched a fully functional, complex digital product in 2 weeks, cutting the original 7-week development projection by more than 70%.

<strong>Empowered Non-Technical Teams</strong><br />
Transformed a rigid, primitive text field into a modular page-building experience, allowing the internal client team to spin up rich media, grids, and galleries completely independently and with zero coding knowledge.

<strong>Production-Grade Compliance</strong><br />
Delivered a completely semantic, high-performance web experience that met rigid corporate compliance standards for cross-browser testing and web accessibility.

<strong>Seamless Bilingual Launch</strong><br />
Deployed a fully localized English and French experience across all custom modules simultaneously, successfully capturing regional talent pools without requiring separate page builds.

<br /><strong><a href="https://jobs.telusdigital.com/">View project</a></strong>
