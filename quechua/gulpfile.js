var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

var config = {
  vendor: 'src/scripts/vendor/',
  stylesheets: '/app/assets/stylesheets/'
}

gulp.task('default', [
  'server',
  'fonts',
  'image',
  'image:watch',
  'sass',
  'sass:watch',
  'jade',
  'jade:watch',
  'jquery',
  'javascript',
  'javascript:watch'
]);

// Run sever at port 8000
gulp.task('server', [], function() {
  browserSync({
    notify: false,
    server: {
      baseDir: './out'
    },
    port: 8000
  });

  gulp.watch(['out/*.html'], browserSync.reload);
  gulp.watch(['out/js/*.js'], browserSync.reload);
  gulp.watch(['out/css/*.css'], browserSync.reload);
});

// Usage Sass
gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass({
      includePaths: [
      config.vendor + 'bourbon' + config.stylesheets,
      config.vendor + 'neat' + config.stylesheets,
      config.vendor + 'normalize-scss'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('out/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

// Usage Jade
gulp.task('jade', function() {
  var YOUR_LOCALS = {};

  return gulp.src('src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('out'))
});

gulp.task('jade:watch', function() {
  gulp.watch('src/**/*.jade', ['jade']);
});

// Usage Javascript
gulp.task('javascript', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(gulp.dest('out/scripts/'));
});

gulp.task('javascript:watch', function() {
  gulp.watch('src/scripts/**/*.js', ['javascript'])
});

// Usage Jquery
gulp.task('jquery', function() {
  return gulp.src(config.vendor + 'jquery/dist/jquery.js')
    .pipe(gulp.dest('out/scripts/'));
});

// Usage images
gulp.task('image', function() {
  return gulp.src('src/images/**/*')
    .pipe(gulp.dest('out/images/'));
});

gulp.task('image:watch', function() {
  gulp.watch('src/images/**/*', ['image']);
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('out/fonts'));
});
