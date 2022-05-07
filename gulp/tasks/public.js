import ghPages from 'gulp-gh-pages';

export const gitPush = () => {
    return app.gulp.src(app.path.build.pages)
        .pipe(ghPages());
}
