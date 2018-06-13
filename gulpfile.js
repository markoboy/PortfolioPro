// Require gulp and plugins.
var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	reload = browserSync.reload;
	useref = require('gulp-useref'),
	gulpIf = require('gulp-if'),
	uglify = require('gulp-uglify'),
	cssnano = require('gulp-cssnano'),
	runSequence = require('run-sequence'),
	babel = require('gulp-babel'),
	del = require('del');

gulp.task('browserSync', function() {
	browserSync.init( {
		server: {
			baseDir: 'src'
		}
	});
});

gulp.task('useref', function() {
	return gulp.src('src/*.html')
		.pipe(useref())
		// Transpile it to es5 code.
		.pipe(gulpIf('*.js', babel( {
			presets: ['env']
		})))
		// Uglify if it is a JS file.
		.pipe(gulpIf('*.js', uglify()))
		// Minify if it is a CSS file.
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserSync'], function() {
	gulp.watch('src/*.html', reload);
	gulp.watch('src/css/**/*.css', reload);
	gulp.watch('src/js/**/*.js', reload);
})

gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('build', function(cb) {
	runSequence(
		'clean:dist',
		'useref',
		cb
		);
});

gulp.task('default', function(cb) {
	runSequence(
		['browserSync', 'watch'],
		cb
		);
});