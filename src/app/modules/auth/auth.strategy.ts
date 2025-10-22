import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "../../config";

passport.use(
   new GoogleStrategy(
      {
         clientID: config.google_client_id!,
         clientSecret: config.google_client_secret!,
         callbackURL: "http://localhost:5000/api/v1/auth/google/callback",
         passReqToCallback: true,
      },
      function (request, accessToken, refreshToken, profile, done) {
         return done(null, profile);
      }));

passport.serializeUser((user: any, done) => {
   done(null, user); // store user in session
});

passport.deserializeUser((user: any, done) => {
   done(null, user); // attach user to req.user
});

export default passport;
