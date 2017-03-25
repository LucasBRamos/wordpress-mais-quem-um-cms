const elixir = require('laravel-elixir'),
  Task   = elixir.Task;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.extend('movefile', function() {
  new Task('movefile', function() {
    return gulp
      .src(
        [
          './src/**',
          '!./src/assets/',
          '!./src/assets/**'
        ]
      )
      .pipe(gulp.dest('./build'))
  }).watch(['./src/**']);
});

elixir.config.browserSync.proxy = false;
elixir.config.sourcemaps = false;

elixir(mix => {
  mix
    .webpack('./src/assets/js/reveal.js', 'build/public/assets/js/reveal.min.js')

    .copy('src/assets/images/**/**.*', 'build/public/assets/images/')

    .copy('./node_modules/reveal.js/js/reveal.js', 'build/public/assets/vendors/revealjs/js/reveal.js')
    .copy('./node_modules/reveal.js/css/print', 'build/public/assets/vendors/revealjs/css/print')
    .copy('./node_modules/reveal.js/css/theme', 'build/public/assets/vendors/revealjs/css/theme')
    .sass('./node_modules/reveal.js/css/reveal.scss', 'build/public/assets/vendors/revealjs/css/reveal.css')
    .copy('./node_modules/reveal.js/plugin/', 'build/public/assets/vendors/revealjs/plugin')
    .copy('./node_modules/reveal.js/lib/', 'build/public/assets/vendors/revealjs/lib')

    .copy('./node_modules/font-awesome/fonts/', 'build/public/assets/vendors/font-awesome/fonts/')
    .copy('./node_modules/font-awesome/css/font-awesome.min.css', 'build/public/assets/vendors/font-awesome/css/')

    .movefile()

    .browserSync({
      server: './build',
      files: [
        './build/**/**.html',
        './build/public/assets/css/**/*.css'
      ],
    })
});
