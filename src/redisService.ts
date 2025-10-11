import { createClient } from "redis";

const redisClient = createClient({
   url: "redis://localhost:6379",
});

redisClient.on("connect", () => {
   console.log("Redis client connected");
});

redisClient.on("error", (err) => {
   console.error("Redis connection error:", err);
});

export default redisClient;
