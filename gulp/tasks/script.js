module.exports = () => 
  $.gulp.task('scripts', () => 
    $.gulp.src($.path.src.scripts)
      .pipe($.gp.include())
      .pipe($.gp.babel())
      .pipe($.gulp.dest($.path.project.scripts))
      .on('end', $.bs.reload))