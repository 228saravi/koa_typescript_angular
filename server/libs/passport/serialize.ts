import  User from '../../models/user';
import * as passport from 'koa-passport';

// паспорт напрямую с базой не работает
passport.serializeUser(function(user, done) {
  done(null, user.id); // uses _id as idFieldd
});

passport.deserializeUser(function(id, done) {
  User.findById(id, done); // callback version checks id validity automatically
});
