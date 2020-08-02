---
permalink: /TODO.md
---

# TODO
* Membership updated layout
* Membership Fees: tables
* Tables Styles
** /news/lapierre-series-winners-2019/
* ALERT for COVID notice
* Header brand logo as embedded SVG
* Footer brand logo as embedded SVG
* Merge media queries
* /news-events-and-results-submission/
* News pagination
* Add Helmet for <head>
** Page specific inlined CSS using helmet: https://www.npmjs.com/package/eleventy-plugin-helmet
** Helmet for SEO
* Events in navigation open in external window with indicator?
* Open Graph in <head>
* Favicon
* apple-touch-icon
* Full a11y audit
* PWA support
* Do we required carousels?
* Netlify CMS
** Add Netlify Identity to home using Helmet <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
** Add Netlify Identity script to home using Helmet
```
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
```
** Setup pages
** Setup posts
* Check for 404s: Google Search Console
* Check for 404s: Bing Webmasters https://www.bing.com/webmasters/
* Convert to Snowpack? https://github.com/pikapkg/create-snowpack-app/tree/master/templates/app-template-11ty
* Eleventy plugins
** https://www.npmjs.com/package/eleventy-plugin-excerpt
** https://www.npmjs.com/package/eleventy-xml-plugin
** https://www.npmjs.com/package/eleventy-plugin-image
