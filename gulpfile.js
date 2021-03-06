// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";
// Передаём значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins
}
// Импорт задачи
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js"
import { images } from "./gulp/tasks/images.js";
import { zip } from "./gulp/tasks/zip.js";
import { gitPush } from "./gulp/tasks/public.js";

// Наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);

}

// Основные задачи
const mainTasks = gulp.parallel(copy,html, scss, js, images);

// Построение сценариев выполнения задач
const dev = gulp.series(reset,mainTasks,gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks, gitPush);
const deployZip = gulp.series(reset, mainTasks, zip);
const pages = gulp.series(reset, mainTasks, gitPush);
// Экспорт сценариев
export { dev }
export { build }
export { deployZip }
export { pages }

// Выполнение сценария по умолчанию
gulp.task('default',dev);
