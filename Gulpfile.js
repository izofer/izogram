var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles',function(){
	gulp.src('index.scss')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('public/css'));
});

//run tasks
gulp.task('default', ['styles']);