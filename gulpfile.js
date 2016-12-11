//-----------------------------------------------------
// SWAN UI
// by Sebastian Serna
// 2015 - 2016
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sassdoc = require('sassdoc'),
    twig = require('gulp-twig'),
    browserSync = require('browser-sync');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// Twig to HTML
var inputTwigWatch = 'src/pages/**/*.htm';
var inputTwig = 'src/pages/*.htm';
var outputTwig = 'dist/pages';
var inputTwigIndex = 'src/index.htm';
var outputTwigIndex = 'dist/';
// JS
var inputJs = 'src/scripts/*.js';
var outputJs = 'dist/scripts/';
var inputJsSyntax = ['src/scripts/dev/syntax/shCore.js', 'src/scripts/dev/syntax/shBrushXml.js'];
var outputJsSyntax = 'dist/scripts/dev/';
var inputJsCss = ['src/scripts/dev/syntax/shCore.css', 'src/scripts/dev/syntax/shThemeSwan.css'];
var outputJsCss = 'dist/scripts/dev/';
// Sass
var inputSass = 'src/styles/**/*.scss';
var outputSass = 'dist/styles/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

//-----------------------------------------------------
// Twig templates to HTML
//-----------------------------------------------------

gulp.task('twig', function() {
    return gulp
      .src(inputTwig)
      .pipe(plumber())
      .pipe(twig())
      .pipe(gulp.dest(outputTwig))
      .pipe(browserSync.stream());
});

gulp.task('twigIndex', function() {
    return gulp
      .src(inputTwigIndex)
      .pipe(plumber())
      .pipe(twig())
      .pipe(gulp.dest(outputTwigIndex))
      .pipe(browserSync.stream());
});

//-----------------------------------------------------
// Sass compiler task
//-----------------------------------------------------

gulp.task ('sass' , function() {
    return gulp
      .src(inputSass)
      .pipe(plumber())
      .pipe(sass(sassOptions).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest(outputSass))
      .pipe(cleanCSS())
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest(outputSass))
      .pipe(browserSync.stream());
});

//-----------------------------------------------------
// Scripts merge task
//-----------------------------------------------------

gulp.task ('minjs-swan' , function() {
    return gulp
      .src (inputJs)
      .pipe(plumber())
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(rename('swan.min.js'))
      .pipe(gulp.dest(outputJs))
      .pipe(browserSync.stream());
});

gulp.task ('minjs' , function() {
    return gulp
      .src (inputJsSyntax)
      .pipe(plumber())
      .pipe(concat('syntax.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(outputJsSyntax))
      .pipe(browserSync.stream());
});

gulp.task ('minjs-css' , function() {
    return gulp
      .src (inputJsCss)
      .pipe(plumber())
      .pipe(concat('syntax.min.css'))
      .pipe(cleanCSS())
      .pipe(gulp.dest(outputJsCss));
});

//-----------------------------------------------------
// Browser Sync task (static server)
//-----------------------------------------------------

gulp.task ('browser-sync' , function() {
    browserSync.init({
        server: {
          baseDir: 'dist',
          index: 'index.html'
        }
    });
    gulp.watch([
      'dist/*.html',
      'dist/pages/*.html',
      'dist/styles/*.css'
      ]).on("change", browserSync.reload);
});

//-----------------------------------------------------
// Watch tasks
//-----------------------------------------------------

gulp.task('watch', ['browser-sync'] , function() {
      gulp.watch(inputJs, ['minjs-swan']);
      gulp.watch(inputJsCss, ['minjs-css']);
      gulp.watch(inputJsSyntax, ['minjs']);
      gulp.watch(inputTwigWatch, ['twig','twigIndex']);
      gulp.watch(inputTwigIndex, ['twig','twigIndex']);
      gulp.watch(inputSass, ['sass']);
});
