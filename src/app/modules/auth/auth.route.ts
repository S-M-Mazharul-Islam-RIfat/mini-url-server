import express, { NextFunction, Request, Response } from "express";
import passport from "./auth.strategy";

const router = express.Router();

function isLoggedIn(req: Request, res: Response, next: NextFunction) {
   req.user ? next() : res.sendStatus(401);
}

// trigger oAuth login
router.get(
   "/google",
   passport.authenticate("google", { scope: ["profile", "email"] })
);

// callback route
router.get('/google/callback',
   passport.authenticate('google', {
      successRedirect: '/api/v1/auth/protected',
      failureRedirect: '/api/v1/auth/google/failure'
   })
);

router.get('/protected', isLoggedIn, (req, res) => {
   res.send(`Hello `);
});


router.get('/auth/google/failure', (req, res) => {
   res.send('Failed to authenticate..');
});


export const AuthRoutes = router;
