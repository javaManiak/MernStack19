// SPA - Single Page Application

// backend - a server with restful api to save/update/fetch the information
// frontend - create ui on the fly using js-libraries like react, angular, vuejs, etc., uses api to save info   

// one and only html rendered to creat DOM - structure on the browser(very first call)
// index.html <contains  - seo/sem tags (used for setting higher rank in search engine)>
// index.html <contains  - a reference to js file whick bundles entire application built using react or angular in core js>
// index.html <contains - a root container where the entire apllication from bundle.js is rendered>

// bundle.js is 
// transpiled colklection of resolved and minified javascript files, usde to each component and its features
// javescript files - are libraries like react/angular, pages like home, product, cart, signin, etc....
// bundle.js also contains minified CSS core libraries and the CSS local files
// bundle.js also contains - links to media (images, videos, etc.) or media itself

// transpilation
// conversion of typescript, es6, react/angular - keywords, features. intot normal js format, which can run on any browser
// babel - libraries to convert es6, ts, react/angualr code into - normal js format
// babel - has its own configurations

// budling
// bundling - it is the process of the combining javascript, css, html, media, files, so that every file contains the 
//            referenced file, ensures loading of the needed file goes flawless and also reduces redundency
// bundling - needs a tool like tast trunner (gulp, grunt, bower, and webpack etc.)

// minfication and code optimization
// minification - the process of removal of extra spaces, commented codes, redundent codes is termed as minification
// code optimization - replacing the large variable names, complex large variables, etc.
// is done by additional libraries with task runner (webpack)

// Hosting the front end
// We can host via express, webpack is better solution as it can do all other above tasks like
// transpilation, bundling, minification, compression, split, etc. along with giving host from node

// "devDependencies": {
//
//  }


// npm i @babel/core @babel/preset-env

// copy package.json
// npm i

