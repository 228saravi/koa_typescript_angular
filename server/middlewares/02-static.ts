
// Usually served by Nginx
import * as staticMiddleware from 'koa-static';
exports.init = app => app.use( staticMiddleware('dist'));

