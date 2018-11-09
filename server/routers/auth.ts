import * as config from 'config';
import * as jwt from 'jwt-simple';
import * as passport from 'koa-passport';
import User from '../models/user';

const login = async (ctx,next)=> {
    await passport.authenticate('local', function (err, user) {
        if (user == false) {
          ctx.body = "Login failed";
        } else {
          //--payload - информация которую мы храним в токене и можем из него получать
          const payload = {
            id: user.id,
            displayName: user.displayName
          };
          const token = jwt.encode(payload, config.jwtSecret);
          
          ctx.body = {user: user.displayName, token:  token};
        }
      })(ctx, next);  
}
const register =async(ctx, next)=>{
    const user = await User.create(ctx.request.body);
    await login(ctx, next);
}
export default{
    login, register
}