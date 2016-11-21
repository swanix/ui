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
    minifyCSS = require('gulp-minify-css'),
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
var inputTwig = 'src/pages/*.htm';
var outputTwig = 'dist/pages';
// JS
var inputJs = 'src/scripts/*.js';
var outputJs = 'dist/scripts/';
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
        .pipe(twig())
        .pipe(gulp.dest(outputTwig));
});

//-----------------------------------------------------
// Sass transpiler task
//-----------------------------------------------------

gulp.task ('sass' , function() {
     return gulp
     	.src(inputSass)
      .pipe(plumber())
	    .pipe(sass(sassOptions).on('error', sass.logError))
    	.pipe(autoprefixer())
	    .pipe(gulp.dest(outputSass))
      .pipe(minifyCSS())
      .pipe(rename('styles.min.css'))
      .pipe(gulp.dest(outputSass))
      .pipe(browserSync.stream());
});

//-----------------------------------------------------
// Scripts merge task
//-----------------------------------------------------

gulp.task ('mergejs' , function() {
	return gulp
		.src ('inputJs')
	  .pipe(plumber())
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('outputJs'));
});


//-----------------------------------------------------
// Sass Docs task
//-----------------------------------------------------

gulp.task('sassdoc', function () {
  return gulp
    .src(inputSass)
    .pipe(sassdoc())
    .resume();
});

//-----------------------------------------------------
// Production package tasks
//-----------------------------------------------------

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(inputSass)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(outputSass));
});


//-----------------------------------------------------
// Browser Sync task (static server)
//-----------------------------------------------------

gulp.task ('browser-sync' , function() {
    browserSync.init({
        server: {
          baseDir: 'dist',
					index: 'index.htm'
        }
    });
		gulp.watch([
      'dist/**/*.html',
      'dist/layouts/*.html',
      'dist/styles/*.css'
      ]).on("change", browserSync.reload);
});


//-----------------------------------------------------
// Watch tasks
//-----------------------------------------------------

gulp.task('watch', ['sass' , 'twig' , 'browser-sync'], function() {
	  gulp.watch(inputTwig, ['twig']);
    gulp.watch(inputSass, ['sass']);
});
