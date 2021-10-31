module.exports = () => 
  $.gulp.task('styles', () => 
    $.gulp.src($.path.src.styles)
      .pipe($.sass({outputStyle: 'expanded'}))
      .pipe($.gp.autoprefixer())
      .pipe($.gp.groupCssMediaQueries())
      // .pipe($.sass({outputStyle: 'compressed'}))
      .pipe($.gulp.dest($.path.project.styles))
      .on('end', $.bs.reload))