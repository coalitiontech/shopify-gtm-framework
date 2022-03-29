import gulp from 'gulp';
import rename from 'gulp-rename';
import buffer from 'gulp-buffer';
import uglify from 'gulp-uglify';
import tap from 'gulp-tap';
import browserify from 'browserify';
import babel from 'babelify';

gulp.task('build', () => {
	return gulp
		.src('./src/*.js', { read: false })
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
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('./dist/'));
});

gulp.task( 'watch',
	gulp.parallel('build', () => {
		gulp.watch('./src/*.js', gulp.parallel('build'));
	})
);
