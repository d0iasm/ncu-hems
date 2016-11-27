var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ejs = require("gulp-ejs");

gulp.task("sass", function() {
    gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"));
});

gulp.task("ejs", function() {
    gulp.src(
        ["ejs/**/*.ejs",'!' + "ejs/**/_*.ejs"]
    )
        .pipe(ejs({}, {ext: '.html'}))
        .pipe(gulp.dest("./public"))
});

gulp.task('default', ['sass', 'ejs']);
