var gulp = require('gulp'),
postcss = require('gulp-postcss'), // plugin to use the 'postcss'
autoprefixer = require('autoprefixer'), // plugin to use the 'autoprefixer' feature
cssvars = require('postcss-simple-vars'), // plugin to use the variables in css
nestedcss = require('postcss-nested'), // plugin to write the nested css
cssImport = require('postcss-import'), // to download the code where the import is there
mixins = require('postcss-mixins');

gulp.task('styles', function () {
    return gulp.src('./assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, cssvars, nestedcss, autoprefixer]))
      .on('error', function (errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
      })
      .pipe(gulp.dest('./temp/styles'));
});