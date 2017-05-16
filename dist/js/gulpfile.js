var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass', function() {
  gulp.src('../../src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../css/'))
});

//Watch task
gulp.task('default',function() {
  gulp.watch('../../src/scss/*.scss',['compileSass']);
});
