import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as koaWebpackHotMiddleware from 'koa-webpack-hot-middleware';
import * as koaWebpackDevMiddleware from 'koa-webpack-dev-middleware';
import * as config from '../webpack.config';
import * as webpack from 'webpack';
import * as fs from 'fs';
import * as path from 'path'
import './libs/mongoose'
import auth from './routers/auth';
const compiler = webpack(config);
const webpackDevMiddleware = koaWebpackDevMiddleware(
    compiler,
    config.devServer);
const webpackHotMiddleware = koaWebpackHotMiddleware(compiler);
const app = new Koa();
const router = new Router();

app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)

const handlers = fs.readdirSync(path.join(__dirname, 'middlewares')).sort();

handlers.forEach(handler => require('./middlewares/' + handler).init(app));
router.post('/api/login', auth.login);
router.post('/api/register', auth.register);   
app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');