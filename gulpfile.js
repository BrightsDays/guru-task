const gulp = require('gulp');
const webpack = require('webpack-stream');
const browsersync = require('browser-sync');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

const dist = './build/';

const buildPug = () => {
  return gulp.src('./src/pug/index.pug')
             .pipe(pug({
               doctype: 'html'
             }))
             .pipe(gulp.dest(dist))
             .pipe(browsersync.stream());
};
exports.buildPug = buildPug;

const copyAssets = () => {
  return gulp.src("./src/assets/**/*.*")
             .pipe(gulp.dest(dist))
             .on("end", browsersync.reload);
};
exports.copyAssets = copyAssets;

const buildSass = () => {
  return gulp.src("./src/sass/style.sass")
             .pipe(sass().on('error', sass.logError))
             .pipe(gulp.dest(dist))
             .pipe(browsersync.stream());
};
exports.buildSass = buildSass;

const buildJs = () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest(dist))
                .on("end", browsersync.reload);
};
exports.buildJs = buildJs;

const watch = () => {
  browsersync.init({
		server: dist,
		port: 4000,
		notify: true
    });
    
    gulp.watch('./src/pug/**/*.pug', gulp.parallel(buildPug));
    gulp.watch("./src/assets/**/*.*", gulp.parallel(copyAssets));
    gulp.watch("./src/js/**/*.js", gulp.parallel(buildJs));
    gulp.watch("./src/sass/**/*.sass", gulp.parallel(buildSass));
};
exports.watch = watch;

const build = () => {
  gulp.parallel(buildPug, buildJs, buildSass, copyAssets);
};
exports.build = build;

exports.default = gulp.parallel(watch, build);