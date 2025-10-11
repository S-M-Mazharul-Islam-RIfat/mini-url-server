import { Server } from 'http';
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import redisClient from './redisService';

let server: Server;

async function main() {
   try {
      await mongoose.connect(config.database_url as string);
      console.log("MongoDB connected");

      await redisClient.connect();

      server = app.listen(config.port, () => {
         console.log(`MiniLink app is listening on port ${config.port}`);
      });
   } catch (err) {
      console.log(err);
      process.exit(1);
   }
}

main();