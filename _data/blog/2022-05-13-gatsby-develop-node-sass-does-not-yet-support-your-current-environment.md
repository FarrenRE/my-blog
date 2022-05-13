---
template: BlogPost
date: 2022-05-13T02:35:17.833Z
path: /gatsby-node-sass-unsupported
title: $ gatsby develop | Node Sass does not yet support your current environment
metaDescription: >-
  Node Sass does not yet support your current environment: Windows 64-bit with
  Unsupported runtime (93)

  For more information on which environments are supported please see:

  https://github.com/sass/node-sass/releases/tag/v4.13.1
draft: false
---
As I blew off the dust from one of my past Gatsby + Netlify CMS projects, I was greeted by a now-pretty-familiar node-sass error upon running \`gatsby develop\`:

```
 ERROR #98123  WEBPACK

Generating development JavaScript bundle failed

Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime (93)
For more information on which environments are supported please see:
https://github.com/sass/node-sass/releases/tag/v4.13.1
```

Since [node-sass is deprecated](https://sass-lang.com/blog/libsass-is-deprecated), let's swap it out. Turns out this is pretty simple! In gatsby-config.js:

```
`gatsby-plugin-sass`,
```

Just need to specify the correct parameter to ensure the correct compiler is being used:

```
// remember to "npm i --save sass" in lieu of node-sass (might as well uninstall it, too!)

{
    resolve: `gatsby-plugin-sass`,
    options: {
        implementation: require("sass")
    },
},
```

And voila!

<span style="color:#13750d;">success</span>\
<span style="color:#13750d;">success</span>\
<span style="color:#13750d;">success</span>\
<span style="color:#13750d;">success</span>

:)
