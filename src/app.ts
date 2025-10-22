import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import passport from './app/modules/auth/auth.strategy';
import config from './app/config';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({
   origin: "http://localhost:5000",
   credentials: true,
}));

// express session for oauth
const session = require('express-session')
app.use(session({
   secret: config.oauth_secret,
   resave: false,
   saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// application routes
app.use('/api/v1', router)

// error handling
app.use(globalErrorHandler);

app.get('/', (req, res) => {
   res.send('<a href="http://localhost:5000/api/v1/auth/google">Authentication With Google</a>')
})

export default app;