module.exports = () =>  
  $.gulp.task('html', () => 
    $.gulp.src($.path.src.html)
      .pipe($.gp.pug({pretty: true}))
      .pipe($.gulp.dest($.path.project.html))
      .on('end', $.bs.reload))