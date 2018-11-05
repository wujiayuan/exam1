var gulp = require('gulp');
var scss = require('gulp-sass');
gulp.task('default', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(scss()).pipe(gulp.dest('src/css'))
})