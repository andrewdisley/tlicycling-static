const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("EEEE DDD");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Date formatting (footer date)
  eleventyConfig.addFilter("footerDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  // Limit posts
  eleventyConfig.addFilter("limitposts", function(array, limit) {
    return array.slice(0, limit);
  });

  // CleanCSS
  // https://github.com/jakubpawlowicz/clean-css
  eleventyConfig.addFilter("cssmin", function(code) {
    const cleanCSSOptions = {
      level: {
        1: {
          specialComments: false
        },
        2: {
          all: true
        }
      }
    };
    return new CleanCSS(cleanCSSOptions).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function(str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@]/g
    });
  });

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownItAnchor = require("markdown-it-anchor");
  let markdownItAnchorOptions = {
    permalink: false
  };
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItAttrsOptions = {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: [] // empty array = all attributes are allowed
  };

  let mdIt = markdownIt(markdownItOptions).use(markdownItAnchor, markdownItAnchorOptions).use(markdownItAttrs, markdownItAttrsOptions)

  // Exposes markdownit code pair for use with yaml data
  eleventyConfig.addPairedShortcode("markdownit", function(content) {
    return mdIt.render(content);
  });

  // PassthroughCopy
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy('src/BingSiteAuth.xml');
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/google3a9cfc1297810bcd.html");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("u");

  eleventyConfig.setLibrary("md", mdIt);

  return {
    dataTemplateEngine: "njk",
    dir: {
      data: "_data",
      input: "src",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "liquid",
    passthroughFileCopy: true,
    pathPrefix: "/",
    templateFormats: ["md", "njk", "html", "liquid"]
  };
};
