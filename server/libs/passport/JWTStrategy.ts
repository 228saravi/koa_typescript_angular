import * as passport from 'koa-passport';
import * as config from 'config';
import {Strategy, ExtractJwt} from 'passport-jwt';
import  User from '../../models/user';

passport.use(new Strategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.get('jwtSecret')
}, function(jwtPayload, done) {
  User.findById(jwtPayload.id, function(err, user) {
    if (err) {
      return done(err, false);
    }

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
}));
