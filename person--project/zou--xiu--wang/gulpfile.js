var _gulp = require("gulp");
var _gulphtmlmin = require("gulp-htmlmin");
var _gulpCssmin = require("gulp-minify-css");
var _gulpJsmin = require("gulp-uglify");
var _gulpImagemin = require("gulp-imagemin");

//创建任务
_gulp.task("cssmin",function(){
    _gulp.src("./css/logo.css")
        .pipe(_gulpCssmin())
        .pipe(_gulp.dest("./disk/css"));
});

_gulp.task("jsmin",function(){
    _gulp.src("./js/app/goods.js")
        .pipe(_gulpJsmin())
        .pipe(_gulp.dest("./disk/js"));
});
//创建一个任务，在任务中， 执行指定的所有任务
//名称为“default”
_gulp.task("default",["cssmin","jsmin"]);