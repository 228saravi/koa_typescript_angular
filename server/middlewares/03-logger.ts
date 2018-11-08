
// request/response logger
import * as logger from 'koa-logger';

exports.init = app => app.use(logger());
