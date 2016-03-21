var gulp = require('gulp');
var sass = require('gulp-sass');
var download = require('gulp-downloader');

// Imported from Brand.ai
var scssURL = 'https://assets.brand.ai/acme-demo/_style-params.scss';

gulp.task('sass', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('styles', function(){
  return download(scssURL).pipe(gulp.dest('scss'));
});
