var gulp = require("gulp");
var sass = require("gulp-sass");
var ejs = require("gulp-ejs");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("sass", function() {
    gulp.src("sass/**/*scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("js", function() {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("ejs", function() {
    gulp.src(["ejs/**/*.ejs",'!' + "ejs/**/_*.ejs"])
        .pipe(plumber())
        .pipe(ejs())
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest("./"))
        .pipe(browser.reload({stream:true}))
});

gulp.task("default", ['server'], function() {
    gulp.watch("sass/**/*.scss",["sass"]);
    gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch(["ejs/**/*.ejs",'!' + "ejs/**/_*.ejs"],["ejs"]);
});
