module.exports = () => {
  $.gulp.task('watcher', () => {
    for(const key in $.path.watch){
      const pathWatch = $.path.watch[key];
      $.gulp.watch(pathWatch, $.gulp.series(key))
    }
  })
}