'use strict';

import gulp from 'gulp';
import webpack from 'webpack-stream';
import notifier from 'node-notifier';
import server from 'gulp-server-livereload';
import concat from 'gulp-concat';
import sass from 'gulp-sass';

// error messages
const notify = function (error) {
  let message = 'In: ';
  let title = 'Error: ';

  if (error.description) {
    title += error.description;
  }
  else if (error.message) {
    title += error.message;
  }

  if (error.filename) {
    const file = error.filename.split('/');
    message += file[file.length-1];
  }

  if (error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  notifier.notify({title: title, message: message});
};

// create javascript bundle
gulp.task('build', function() {
  return gulp.src('js/main.js')
    .pipe(webpack({
      output: {
        filename: 'bundle.js'
      },
      watch: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
              presets: ['es2015']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./js'));
});

// compile the SASS files from main.scss
gulp.task('sass', function () {
  gulp.src('./styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass-second', function () {
  gulp.src('./styles/second.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('second.css'))
    .pipe(gulp.dest('./styles'));
});

// Run tasks in a specific order
gulp.task('default', ['build', 'sass-second']);
