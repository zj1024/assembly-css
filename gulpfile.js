const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

gulp.task('minScss', () => {
  return gulp.src('./lib/index.scss')
    .pipe(rename('assembly-css.min.scss'))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./dist'))
})

gulp.task('scss', () => {
  return gulp.src('./lib/index.scss')
    .pipe(rename('assembly-css.scss'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./dist'))
})

// 用于文档使用的assembly-css版本
// 由于vuepress直接对标签设置的样式
// assembly-css打包去掉reset文件, 避免影响vuepress默认样式
gulp.task('docScss', () => {
  return gulp.src('./lib/_doc.scss')
    .pipe(rename('assembly-css.scss'))
    .pipe(sass({
        outputStyle: 'compact'
    }))
    .pipe(gulp.dest('./docs/.vuepress/public'))
})

gulp.task('default', gulp.parallel('scss', 'minScss', 'docScss'))
