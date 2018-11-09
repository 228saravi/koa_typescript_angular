import * as passport from 'koa-passport';
import * as User from '../../models/user';

import './serialize';

import'./localStrategy';
import'./JWTStrategy';
export default  passport ;
