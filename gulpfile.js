global.$ = {
  gulp: require('gulp'),
  bs: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  sass: require('gulp-sass')(require('node-sass')),
  path: {
    serverDir: './app/project',
    gulpTasks: require('./gulp/config/tasks'),
    src: {
      html:     './app/src/*.pug',
      styles:   './app/src/scss/*.{scss,sass}',
      scripts:  './app/src/js/*.js',
      fonts:    './app/src/fonts/**/*.{eot,ttf,woff,woff2,otf}',
      images:   './app/src/images/**/*.{jpg,png,svg,gif}',
    },
    project:{
      html:     './app/project/',
      styles:   './app/project/css/',
      scripts:  './app/project/js/',
      fonts:    './app/project/fonts/',
      images:   './app/project/images/',
    },
    watch:{
      html:     ['./app/src/*.pug', './app/src/view/**/**/*.pug'],
      styles:   './app/src/scss/**/**/*.{scss,sass}',
      scripts:  './app/src/js/**/**/*.js',
      fonts:    './app/src/fonts/**/*.{eot,ttf,woff,woff2,otf}',
      images:   './app/src/images/**/*.{jpg,png,svg,gif}',
    }
  }
}

$.path.gulpTasks.forEach(taskP => require(taskP)());
$.gulp.task('default', $.gulp.parallel('html', 'styles', 'scripts', 'server', 'watcher', 'fonts', 'images'));
