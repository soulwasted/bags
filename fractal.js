'use strict';

const paths = {
	build: `${__dirname}/build`,
	src: `${__dirname}/src`,
	// static: `${__dirname}/assets`,
	static: `${__dirname}/www`
};

/* Require the path module */
const path = require('path');

/*  Require the Fractal module */
const fractal = module.exports = require('@frctl/fractal').create();

// const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
// const myCustomisedTheme = mandelbrot({
// 	skin: "default",
// 	styles: [
// 		'default',
// 		'www/css/app.css'
// 	],
// 	"nav": ["docs", "components"]
// });

// fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

const mandelbrot = require('@frctl/mandelbrot')({
	favicon: '/assets/icons/icon.ico',
	// lang: 'en-gb',
	styles: ['default'],
	// styles: ['default', '/www/css/fractal.css'],
	static: {
		mount: 'fractal'
	},
	nav: ["docs", "components"]
});

/*  Give your project a title */
fractal.set('project.title', 'BAGS — Design System');

/*  Tell Fractal where to look for components */
const nunj = require("@frctl/nunjucks")({
  env: {
    // Nunjucks environment opts: https://mozilla.github.io/nunjucks/api.html#configure
  },
  filters: {
    // filter-name: function filterFunc(){}
  },
  globals: {
    // global-name: global-val
  },
  extensions: {
    // extension-name: function extensionFunc(){}
  }
});

fractal.components.engine(nunj); /* set as the default template engine for components */
fractal.components.set('path', `${paths.src}/components`);
fractal.components.set('ext', '.njk'); // look for files with a .nunj file extension
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', 'wip');

/*  Tell Fractal where to look for documentation pages */
fractal.docs.set('path', `${paths.src}/docs`);

// Web UI config
fractal.web.theme(mandelbrot);
fractal.web.set('static.path', paths.static);
// fractal.web.set('static.path', __dirname + '/www');
fractal.web.set('builder.dest', paths.build);
// fractal.web.set('builder.urls.ext', null);