var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-sass"),
	cleancss = require("gulp-clean-css");

gulp.task("devcss", function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(concat("materialize.min.css"))
	.pipe(cleancss({keepSpecialComments : 1}))
	.pipe(gulp.dest("css/"));
});

gulp.task('default', ['devcss'], function() {
	gulp.watch('sass/**/*.scss', ['devcss'])
});
