import * as Auth from './controllers/auth';
import passportService from './services/passport';
import passport from 'passport';

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

export default (app) => {
console.log("in the routes".requireAuth);
  //root handler
  app.get('/', requireAuth, (req,res,next) => {

     res.send(['first','second','third']);
  });
  /*app.post('/signup', (req,res,next) => {
     return Auth.signup(req,res,next);
  });*/
  app.post('/signup', Auth.signup);
  app.post('/signin', requireSignin, Auth.signin);
}
