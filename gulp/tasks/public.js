import ghPages from 'gulp-gh-pages';

export const gitPush = () => {
    return app.gulp.src('./dist/**/*')
        .pipe(ghPages());
}
