## Project Overview
<pre>
<b>Project:</b>   TELUS Career Site
<b>Role:</b>      UI Developer & Accessibility/UX Consultant
<b>Timeline:</b>  2 Weeks (Accelerated from a 7-week initial estimate)
<b>Tools:</b>     Figma, Liquid, HTML5, CSS3, JS/jQuery, Foundation
</pre>
&nbsp;<strong><a href="https://jobs.telusdigital.com/" rel="noopener noreferrer">View project</a></strong>

<p><a href="https://jobs.telusdigital.com/" rel="noopener noreferrer"><img src="https://doylesee.github.io/tls-cws/thumbnail.jpeg" /></a></p>
<br />

## The Challenge
The client required a highly complex, custom career portal based on Figma designs provided by their third-party marketing agency. However, the project presented two massive hurdles:

**Compressed Timeline**
<br />A project originally scoped and quoted for a 7-week delivery was heavily accelerated by the client, demanding full execution in just 2 weeks.

**CMS Technical Limitations**<br />
The CMS backend was highly restrictive, offering content administrators nothing more than a single-field WYSIWYG editor. This made it virtually impossible for non-technical users to build or manage modern, multi-column layouts, or complex media sections.<br />
Compounding this challenge was the requirement for full multi-lingual support, requiring the custom layouts to dynamically support both English and French localized content.

**Leadership & Project Management Gap**<br />
Compounding the compressed timeline, the assigned Project Manager went on unexpected leave. With no dedicated manager to steer the ship, the project risked falling apart due to a lack of structure and a breakdown in communication.

<br />

## Core Objectives
🟠 **Design Optimization & Quality Assurance**<br />
Audit Figma designs for technical usability gaps, user flow oversights, and web accessibility flaws before development.

🟠 **Rapid Component Development**<br />
Build a comprehensive UI library, ensuring flawless responsiveness and cross-browser performance under a critical deadline.

🟠 **Semantic & Accessible Coding**<br />
Implement semantic coding to optimize search engine indexing (SEO) and strict WCAG compliance for screen readers.

🟠 **No-Code Layout Engine (The Hybrid CMS)**<br />
Build a bespoke compiler inside the frontend template that translates basic text markers from a WYSIWYG editor into advanced layouts automatically.

🟠 **Dynamic Localization**<br />
Implement the frontend to seamlessly support multi-language localized content (English and French), ensuring a unified user experience and proper SEO indexing for both regions.

🟠 **Cross-Functional Leadership**<br />
Step in to absorb all Project Manager responsibilities, establishing clear communication, centralized assets, and an organized testing process to ensure zero information loss.

<br />

## My Approach & Implementation
### 1. Crisis Management & Operational Structure
With the Project Manager on leave during an escalated 2-week turnaround, I immediately stepped up to manage client relations and internal operations. To prevent critical details from slipping through the cracks, I executed a multi-layered communication and organizational strategy:

**Direct Figma Collaboration**<br />
I bypassed slow email chains by communicating directly with the client via contextual comments inside their Figma design files, clarifying design ambiguities and gathering requirements in real time.

**Centralized Communications**<br />
I started a dedicated, private Slack channel for all internal stakeholders (including the on-leave PM for visibility) to centralize technical discussions, surface roadblocks instantly, and provide the team with a single source of truth.

**Organized SharePoint Access**<br />
I built a highly structured, intuitive folder structure in SharePoint to store all incoming copy, media assets, and requirements, allowing the team to easily track project pages and files.

**Streamlined UAT Testing**<br />
To manage the crunch-time User Acceptance Testing (UAT), I created a clean, intuitive QA log sheet. This standardized template allowed the client to easily log issues, enabling me to rapidly work on issues and change requests without wasting time.

### 2. UX Consulting & Pre-Development Audit
Leveraging my senior frontend experience in both design and development, I intercepted the creative agency’s designs early on. I discovered and flagged critical missing details, including missing hover/active interactive states, and severe web accessibility compliance gaps. By actively providing concrete solutions and layouts, I enabled the marketing team to quickly update the designs, mitigating production bottlenecks before coding began.

### 3. Engineering the WYSIWYG-to-Layout Compiler
To bypass the constraints of the CMS, I utilized Liquid to build a parsing engine. Non-technical administrators could now build highly complex, responsive components simply by typing simple text markers (e.g., SECTION CAROUSEL START) directly around their text inside the WYSIWYG editor. Furthermore, I designed this layout engine to be fully localized. By tying the parsed sections to page tags and Liquid language variables, the compiler automatically rendered localized UI text strings (such as form buttons, ARIA labels, and navigation paths) in either English or French based on the user's active locale, ensuring zero content-drift across both versions of the career site.

My backend Liquid script intercepts these blocks, isolates the text content, cleans formatting white spaces, and loops through a dynamic configuration matrix to seamlessly insert the underlying modular code.

### 4. Automated Theme Variations & Global Optimization
I programmed the layout engine to handle inline configuration hooks. If an administrator includes a tag like background-1, the compiler automatically detects if that style corresponds to a dark palette and dynamically appends utility classes like background-dark to guarantee proper color-contrast ratios for web accessibility.

Additionally, to optimize performance under the tight deadline, I added an automated asset optimization routine directly into the loop: it automatically flags and injects native loading="lazy" tags onto images appearing below the fold, resulting in faster initial page loads.

<br />

## Results & Impact
✅ **High-Speed Delivery**<br />
Successfully launched a fully functional, complex digital product in 2 weeks, cutting the original 7-week development projection by more than 70%.

✅ **Empowered Non-Technical Teams**<br />
Transformed a rigid, primitive text field into a modular page-building experience, allowing the client to spin up rich media, grids, and galleries completely independently and with zero coding knowledge.

✅ **Production-Grade Compliance**<br />
Delivered a completely semantic, high-performance web experience that met rigid corporate compliance standards for cross-browser testing and web accessibility.

✅ **Seamless Bilingual Launch**<br />
Deployed a fully localized English and French experience across all custom modules simultaneously, successfully capturing regional talent pools.

✅ **Flawless Project Governance**<br />
Successfully bridged a critical leadership gap by self-managing the project cycle, resulting in an organized data pipeline, an efficient testing process, and a transparent communication that delighted the client despite the high-stress timeline.

<br /><strong><a href="https://jobs.telusdigital.com/" rel="noopener noreferrer">View project</a></strong>
