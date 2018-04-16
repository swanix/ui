//-----------------------------------------------------
// SWANIX UI
// by Sebastian Serna
// 2015 - 2018
//-----------------------------------------------------

'use strict';

var gulp = require('gulp' ),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    twig = require('gulp-twig'),
    postcss = require('gulp-postcss'),
    postcssImport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
    browserSync = require('browser-sync');

//-----------------------------------------------------
// Global variables
//-----------------------------------------------------

// Twig to HTML
var inputTwigWatch = 'src/**/*.twig';
var inputTwig = 'src/pages/*.twig';
var outputTwig = 'docs/';
var baseTwigTemplates = 'src/templates';

// PostCSS to CSS
var inputPostcssWatch = 'src/styles/**/*.css';
var inputPostcss = 'src/styles/swanix.css';
var outputPostcss = 'docs/styles/';
var basePostcssFiles = 'src/styles/';



//-----------------------------------------------------
// Twig templates to HTML
//-----------------------------------------------------

gulp.task('twig', function() {
    return gulp
      .src(inputTwig)
      .pipe(plumber())
      .pipe(twig({ 
        base: baseTwigTemplates, 
        extname: false
      }))
      .pipe(gulp.dest(outputTwig))
      .pipe(browserSync.stream());
});


//-----------------------------------------------------
// PostCSS compiler task
//-----------------------------------------------------

gulp.task('postcss', function () {
  var plugins = [
      postcssImport({ root: basePostcssFiles }),
      cssnext({})
  ];
  return gulp
    .src(inputPostcss)
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(gulp.dest(outputPostcss));
});

//-----------------------------------------------------
// BrowserSync task (server)
//-----------------------------------------------------

gulp.task ('browser-sync' , function() {
    browserSync.init({
        server: {
          baseDir: 'docs',
          index: 'index.html',     
          serveStaticOptions: {
            extensions: ['html']
          }
        }
    });
    gulp.watch([
      'docs/*.html',
      'docs/styles/*.css'
      ]).on("change", browserSync.reload);
});

//-----------------------------------------------------
// Watch tasks
//-----------------------------------------------------

gulp.task('watch', ['twig', 'postcss', 'browser-sync'] , function() {
      gulp.watch(inputTwigWatch, ['twig']);
      gulp.watch(inputPostcss, ['postcss']);
});
