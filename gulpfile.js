var gulp = require('gulp');
var sass = require('gulp-sass');
var download = require('gulp-downloader');
var unzip = require('gulp-unzip');

// Imported from Brand.ai
var scssURL = 'https://assets.brand.ai/acme-demo/_style-params.scss';
var iconsURL = 'https://assets.brand.ai/acme-demo/icons-zip';

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

gulp.task('icons', function(){
  return download(iconsURL).pipe(unzip()).pipe(gulp.dest('icons'));	
});
