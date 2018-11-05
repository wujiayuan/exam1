//gulp配置文件
var gulp = require('gulp');
var scss = require('gulp-sass');
var concat = require('gulp-concat');

//创建gulp任务流，编译sass
gulp.task('sassDev', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(scss()).pipe(gulp.dest('src/css'))
})

//合并js/css
gulp.task('concat', function() {
    return gulp.src('src/css/style.css')
        .pipe(concat()).pipe(gulp.dest('until/concat'))
})

//监听源文件
// gulp.task('watch', function() {
//     return gulp.watch('src/css/style.css')
//         .pipe(scss())
//         .pipe(gulp.dest('src/css'), gulp.series('sassDev'))
// })

//整体执行
// gulp.task('dev', function() {
//     return gulp.series('sassDev', 'concat', 'watch')
// })