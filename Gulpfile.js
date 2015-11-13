var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('./src/page_action/index.html');
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(['./src/page_action/js/**/*.js', '../src/page_action/js/*.js'], {read: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./src/page_action'));
});

