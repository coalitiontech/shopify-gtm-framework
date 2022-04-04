import gulp from 'gulp';
import rename from 'gulp-rename';
import buffer from 'gulp-buffer';
import uglify from 'gulp-uglify';
import tap from 'gulp-tap';
import browserify from 'browserify';
import babel from 'babelify';
import beautify from 'gulp-jsbeautifier';
import concat from 'gulp-concat';

let beautifySettings = {
	js: {
		indent_char: '\t',
		indent_size: 1
	}
};

gulp.task('build-framework', () => {
	return gulp
		.src('./src/ct-gtm.js', { read: false })
		.pipe(
			tap((file) => {
				file.contents = browserify(file.path, {
					debug: true,
				})
					.transform(babel)
					.bundle();
			}),
		)
		.pipe(buffer())
		.pipe(beautify(beautifySettings))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('build-main', () => {
	return gulp
		.src('./src/ct-main.js')
		.pipe(beautify(beautifySettings))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('concat-minified', () => {
	return gulp
		.src([ './dist/ct-gtm.min.js', './dist/ct-main.min.js' ])
		.pipe(concat('bundle.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('concat-unminified', () => {
	return gulp
		.src([ './dist/ct-gtm.js', './dist/ct-main.js' ])
		.pipe(concat('bundle.js'))
		.pipe(beautify(beautifySettings))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('watch',
	gulp.parallel('build-framework', 'build-main', 'concat-minified', 'concat-unminified', () => {
		gulp.watch('./src/ct-main.js', gulp.series('build-main'));
		gulp.watch('./src/ct-gtm.js', gulp.series('build-framework'));
		gulp.watch([ './dist/ct-gtm.js', './dist/ct-main.js' ], gulp.series('concat-unminified'));
		gulp.watch([ './dist/ct-gtm.min.js', './dist/ct-main.min.js' ], gulp.series('concat-minified'));
	})
);
