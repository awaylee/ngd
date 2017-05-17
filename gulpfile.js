var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');


gulp.task('clean', function(cb) {
    del(['static/graph.editor/js/*.js'], cb)
});

gulp.task('minifyjs', function() {
    return gulp.src('static/graph.editor/common/*.js')
        .pipe(concat('graph_common.js'))    //合并所有js到main.js
        .pipe(gulp.dest('static/graph.editor/js'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('static/graph.editor/js'));  //输出
});

gulp.task('default', ['clean', 'minifyjs']);
