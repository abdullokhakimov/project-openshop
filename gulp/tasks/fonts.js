module.exports = () => 
  $.gulp.task('fonts', () => 
    $.gulp.src($.path.src.fonts)
      .pipe($.gulp.dest($.path.project.fonts))
      .on('end', $.bs.reload))