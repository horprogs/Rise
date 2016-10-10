var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    base64 = require('gulp-css-base64'),
    runSequence = require('run-sequence'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    jpegtran = require('imagemin-jpegtran'),
    optipng = require('imagemin-optipng'),
    svgo = require('imagemin-svgo'),
    rename = require("gulp-rename"),
    babel = require('gulp-babel');

var ASSETS_PATH = 'components';

gulp.task('prefix', function () {
    return gulp.src(ASSETS_PATH + '/**/*.css')
        .pipe(prefix({
            browsers: ['last 10 versions']
        }))
        .pipe(gulp.dest(ASSETS_PATH))
});

gulp.task('sass', function () {
    return gulp.src(ASSETS_PATH + '/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(ASSETS_PATH))
        .pipe(browserSync.stream());
});

gulp.task('compressJS', function () {
    return gulp.src([ASSETS_PATH + '/**/*.js', '!' + ASSETS_PATH + '/**/*.min.js', '!' + ASSETS_PATH + '/**/html5shiv.js'])
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(ASSETS_PATH));
});

gulp.task('compressCSS', function () {
    return gulp.src([ASSETS_PATH + '/**/*.css', '!' + ASSETS_PATH + '/**/*.min.css'])
        .pipe(cssnano({autoprefixer: false, zindex: false}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(ASSETS_PATH));
});

gulp.task('base64', function () {
    return gulp.src([ASSETS_PATH + '/**/*.css', '!' + ASSETS_PATH + '/**/*.min.css'])
        .pipe(base64({
            extensionsAllowed: ['.gif', '.jpg', '.png', '.svg'],
            maxWeightResource: 4 * 1024
        }))
        .pipe(gulp.dest(ASSETS_PATH));
});

gulp.task('watch', function () {
    gulp.watch(ASSETS_PATH + '/**/*.js', browserSync.reload);
    gulp.watch([ASSETS_PATH + '/**/*.scss'], ['sass']);
    gulp.watch(['/**/*.html', ASSETS_PATH + '/**/*.js'], browserSync.reload);
});

gulp.task('browserSync', function () {
    return browserSync.init(ASSETS_PATH+'/**',{
        server: {
            baseDir: './'
        },
        notify: false
    })
});

gulp.task('default', ['browserSync', 'watch']);


// ------------ BEGIN: PRODUCTION TASKS ---------------
gulp.task('compressImg', function () {
    return gulp.src([ASSETS_PATH + '/**/*.jpg', ASSETS_PATH + '/**/*.svg', ASSETS_PATH + '/**/*.png'])
        .pipe(imagemin([imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()], {
            progressive: true
        }))
        .pipe(gulp.dest(ASSETS_PATH))
});

gulp.task('build', function () {
    runSequence('sass', 'prefix', 'base64')
});

gulp.task('build:min', function () {
    runSequence('sass', 'prefix', 'base64', ['compressCSS', 'compressJS'])
})
// ------------ END:   PRODUCTION TASKS ---------------