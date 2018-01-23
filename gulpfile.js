'use strict';

// 필요한 모듈선언
const gulp = require( 'gulp' );
const sass = require( 'gulp-sass' );
const babel = require( 'gulp-babel' );
const shell = require( 'gulp-shell' );
const uglify = require( 'gulp-uglify' );
const rename = require( 'gulp-rename' );
const exec = require( 'gulp-exec' );
const plumber = require( 'gulp-plumber' );
const notify = require( "gulp-notify" );

const ts = require( "gulp-typescript" );

function errorAlert( error ) {
  notify.onError( { title: "Gulp Error", message: "Check your terminal", sound: "Purr" } )( error ); //Error Notification
  console.log( error.toString() );//Prints Error to Console
  this.emit( "end" ); //End function
}

// 전역 오브젝트 모음
const fnObj = {
  paths: {
    src: 'src/'
  }
};


/**
 * watch
 */
gulp.task( 'scss-watch', function () {
  gulp.watch( [ './src/scss/**/*.scss' ], [ 'scss-src' ] );
} );

/**
 * SASS
 */
gulp.task( 'scss-src', function () {
  gulp.src( './src/scss/index.scss' )
    .pipe( plumber( { errorHandler: errorAlert } ) )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( './src/scss' ) );
} );


// 걸프 기본 타스크
gulp.task( 'default', [ 'scss-watch' ], function () {
  return true;
} );

/**
 * npm publish
 */

gulp.task( 'dev run!', [ 'scss-watch' ], shell.task( [
  'webpack-dev-server',
] ) );

gulp.task( 'deploy to docs', shell.task( [
  'webpack -p --env=production --progress --profile --colors',
  'git add -A'
] ) );