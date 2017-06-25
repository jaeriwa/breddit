var Metalsmith = require('metalsmith'),
	handlebars  = require('handlebars'),
	sass = require('metalsmith-sass'),
	layouts = require('metalsmith-layouts'),
	watch = require('metalsmith-watch');

Metalsmith(__dirname)
	.source('src')            
	.destination('build')
	.use(layouts({
        engine: 'handlebars',
        partials: 'partials'
        }))
	.use(sass({
		outputDir: 'css',
		outputStyle: "compressed"
	}))
	.use(watch({
		paths: {
        "${source}/**/*": true,
        "layouts/**/*": "**/*.html",
        'src/css/**/*' : '**/*.scss',
		},
		livereload: true,
		})
	)
	.build(function(err){
		if(err) {
			console.log(err)
			} 
			else {
				console.log("Build completed yo")
			}
	});
