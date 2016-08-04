var gulp = require('gulp');
var clean = require('gulp-clean');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');

/* Clean task*/
gulp.task('clean', function() {
  return gulp.src('public/', { read: false })
    .pipe(clean());
});

/* Minify CSS */
gulp.task('css', function() {
  return gulp.src('src/assets/css/app.less')
    .pipe(less())
    .pipe(minifyCss())
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

/* Minify JS*/
gulp.task('appScripts', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('public/js/'))
    .pipe(browserSync.reload({stream:true}));
});

/* Static JSON files */
gulp.task('dataJson', function() {
  return gulp.src('src/**/*.json')
    .pipe(gulp.dest('public/'));
});

/* Minify libs JS*/
gulp.task('scriptsLibs', function() {
  return gulp.src([
      './components/Chart.js/dist/Chart.min.js',
      './components/angular/angular.js',
      './components/angular-ui-router/release/angular-ui-router.min.js',
      './components/lodash/dist/lodash.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest('public/js/'))
});

/* Minify libs CSS */
gulp.task('libsStyle', function() {
  return gulp.src([
      './components/font-awesome/css/font-awesome.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/assets/css/'))
});

/* Build fonts */
gulp.task('fonts', function() {
  return gulp.src([
      './components/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('public/assets/fonts'))
});

/* Build Templates */
gulp.task('templates', function() {
  return gulp.src('src/modules/**/*.html')
    .pipe(gulp.dest('public/templates/'))
    .pipe(browserSync.reload({stream:true}));
});

/* Build images */
gulp.task('images', function() {
  return gulp.src('src/assets/img/*')
    .pipe(gulp.dest('public/assets/img/'))
});

/* Build index */
gulp.task('index', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public/'))
    .pipe(browserSync.reload({stream:true}));
});

/* Start webserver*/
gulp.task('server', function() {
  browserSync({
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: 'public/'
    }
  })
});

/* Watch files */
gulp.task('watch', function() {
  gulp.watch(['src/**/*'], ['build', browserSync.reload]);
});

/* Build task */
gulp.task('build', ['images', 'appScripts','scriptsLibs','dataJson','css','templates','index', 'libsStyle', 'fonts']);

/* Defaul task - run app */
gulp.task('default', ['clean'], function() {
  gulp.start('build');
  gulp.start('server');
  gulp.start('watch');
});
