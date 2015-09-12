//-----------------------------------------------------
// SWAN UI
// by Sebastian Serna
// 2015
//-----------------------------------------------------

'use strict';


var gulp = require( 'gulp' ),
	plumber = require( 'gulp-plumber'),
	sass = require( 'gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require( 'gulp-uglify'),
	concat = require( 'gulp-concat'),
	sassdoc = require('sassdoc');

//-----------------------------------------------------
// Sass compiler variables
//-----------------------------------------------------

var input = 'styles/sass/**/*.scss';
var output = 'styles/css/';
var outputMin = 'dist/css/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

//-----------------------------------------------------
// Sass compiler task
//-----------------------------------------------------

gulp.task ('sass' , function() {
     return gulp
     	.src(input)
        .pipe(plumber())
     	.pipe(sourcemaps.init())
	    .pipe(sass(sassOptions))
    	.pipe(autoprefixer())
	    .pipe(gulp.dest(output));
});

gulp.task ('sass:min' , function() {
     return gulp
     	.src(input)
	    .pipe(sass({outputStyle: 'compressed'}))
	    .pipe(concat('theme.min.css'))
	    .pipe(gulp.dest(output));
});

//-----------------------------------------------------
// Sass Docs task
//-----------------------------------------------------

gulp.task('sassdoc', function () {
  return gulp
    .src(input)
    .pipe(sassdoc())
    .resume();
});

//-----------------------------------------------------
// Scripts merge task
//-----------------------------------------------------

gulp.task ('mergejs' , function() {
	gulp.src ('scripts/all/*.js')
	  .pipe(plumber())
      .pipe(concat('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('scripts/'));
});

//-----------------------------------------------------
// Production package tasks
//-----------------------------------------------------

gulp.task('prod', ['sassdoc'], function () {
  return gulp
    .src(input)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(output));
});

//-----------------------------------------------------
// Watch tasks
//-----------------------------------------------------

gulp.task('watch', function() {
  return gulp
    .watch(input, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});


