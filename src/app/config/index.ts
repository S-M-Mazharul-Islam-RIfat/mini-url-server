import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
   NODE_ENV: process.env.NODE_ENV,
   port: process.env.PORT,
   database_url: process.env.DATABASE_URL,
   google_client_id: process.env.GOOGLE_CLIENT_ID,
   google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
   oauth_secret: process.env.OAUTH_SECRET,
   google_callback_url: String(process.env.GOOGLE_CALLBACK_URL),
   redis_host: String(process.env.REDIS_HOST),
   redis_port: Number(process.env.REDIS_PORT)
}

