---
permalink: /TODO.md
---

# TODO
* Verify: Google Search Console
* Verify: Bing Webmasters
* Merge media queries
* Replace CSS Vars with HEX Values
* Membership updated layout
* Membership Fees: tables
* Tables Styles
** /news/lapierre-series-winners-2019/
* /news-events-and-results-submission/
* News pagination
* ALERT for COVID notice
* Add Helmet for <head>
** Page specific inlined CSS using helmet: https://www.npmjs.com/package/eleventy-plugin-helmet
** Helmet for SEO
* Open Graph in <head>
* Favicon
* apple-touch-icon
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
* Eleventy plugins
** https://www.npmjs.com/package/eleventy-plugin-excerpt
** https://www.npmjs.com/package/eleventy-xml-plugin
** https://www.npmjs.com/package/eleventy-plugin-image
