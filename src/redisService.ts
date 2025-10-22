import config from "./app/config";
const redis = require("redis");

const redisClient = redis.createClient({
   host: process.env.REDIS_HOST || "redis-server",
   port: Number(process.env.REDIS_PORT) || 6379,
});

redisClient.on("connect", () => {
   console.log("Redis client connected");
});

redisClient.on("error", (err: any) => {
   console.error("Redis connection error:", err);
});

export default redisClient;
