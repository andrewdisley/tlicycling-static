# TLI Cycling Website

TLI Cycling website built using [Eleventy](https://www.11ty.io/) static site generator, hosted on [Netlify](https://netlify.com/) and with [Netlify CMS](https://www.netlifycms.org/) for .

Based on the [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) by [Dan Urbanowicz](https://www.danurbanowicz.com/).


## Local development

### 1. Clone this repository:

```
git clone https://github.com/andrewdisley/tlicycling-static
```


### 2. Navigate to the directory

```
cd tlicycling-static
```

### 3. Install dependencies locally

```
npm install @11ty/eleventy
```

### 4. Run Eleventy (builds the site)

```
npx @11ty/eleventy
```

Or build automatically when a template changes:
```
npx @11ty/eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```
