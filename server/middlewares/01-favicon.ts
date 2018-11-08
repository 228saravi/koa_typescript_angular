
// Usually served by Nginx
import * as favicon from 'koa-favicon';

exports.init = app => app.use(favicon());
