//引入gulp组件
var gulp = require('gulp');
//js语法检查
var jshint = require('gulp-jshint');
//sass预处理
var sass = require('gulp-sass');
//文件合并
var concat = require('gulp-concat');
//js压缩
var uglify = require('gulp-uglify');
//重命名
var rename = require('gulp-rename');
//将angularjs 模板压缩并缓存
var templateCache = require('gulp-angular-templatecache');

var jsFiles = [
    // angular1.6
    './node_modules/angular/angular.js',
    // angular 动效
    './node_modules/angular-animate/angular-animate.js',
    // angular 验证消息
    './node_modules/angular-messages/angular-messages.js',
    // angular resource服务类似于 http （很少使用）
    './node_modules/angular-resource/angular-resource.js',
    // angular 使用cookie
    './node_modules/angular-cookies/angular-cookies.js',
    // angular 使用 bootstrap
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
    // angular 使用 storage
    './node_modules/ngstorage/ngStorage.js',
    // angular 国际化
    './node_modules/angular-translate/dist/angular-translate.js',
    './node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
    './node_modules/angular-translate/dist/angular-translate-storage-cookie/angular-translate-storage-cookie.js',
    './node_modules/angular-translate/dist/angular-translate-storage-local/angular-translate-storage-local.js',
    // angular 路由
    './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
    // angular 模态框
    './node_modules/ng-dialog/js/ngDialog.js'
];

var cssFiles = [
    './node_modules/font-awesome/css/font-awesome.css',
    './node_modules/simple-line-icons/css/simple-line-icons.css',
    './node_modules/ng-dialog/css/ngDialog.css',
    './node_modules/ng-dialog/css/ngDialog-theme-default.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './app/style/*.css'
];
//检查脚本
gulp.task('lint', function() {
    gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));

});

//编译Sass css
gulp.task('sass', function() {
    gulp.src('./app/style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/style'));
    gulp.src(cssFiles)
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('../app/public/css'));
});

//合并、压缩js文件
gulp.task('scripts', function() {
    gulp.src(['./app/app.js','./app/app.config.js','app.routes.js','./app/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('../app/public/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('../app/public/js'));
});
//合并、压缩来自npm的js资源文件
gulp.task('npmscripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('npm.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('../app/public/js'))
        .pipe(rename('npm.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulp.dest('../app/public/js'));
});

//合并angular模板文件
gulp.task('angularTemplate', function () {
    return gulp.src('./app/tpl/**/*.html')
        .pipe(templateCache("templateHTML.js",{
            //路径的前缀
            root: 'templates/',
            //模块的名字
            module:"app"
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.dest('../app/public/js'));
});

// 拷贝
gulp.task('copy',function(){
    //字体
    gulp.src('./app/fonts/*/*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(gulp.dest('../app/public/fonts/'));
    gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('dist/fonts/'))
        .pipe(gulp.dest('../app/public/fonts/'));
    //国际化
    gulp.src('./app/i18n/*')
        .pipe(gulp.dest('dist/i18n/'))
        .pipe(gulp.dest('../app/public/i18n/'));
});

//使用browserSync启动一个Web服务器
/*gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});
browserSync.init({
       server: {
           baseDir: "./"
       }
   });
*/

//默认任务
gulp.task('default', function() {
    gulp.run('lint','sass','scripts','npmscripts','copy','angularTemplate');

    gulp.watch('./app/**/*.js', ['lint', 'scripts']);

    gulp.watch('./app/style/**/*.scss', ['sass']);

    gulp.watch('./app/style/**/*.css', ['css']);

    gulp.watch('./app/tpl/**/*.html',['angularTemplate']);

    gulp.watch('./app/**', function() {
        console.log('更新重新打包完成');
        //browserSync.reload();
    });
});