import redisClient from "../../../redisService";
import { encodeBase62 } from "../../utils/encodeBase62";
import { TShortenUrl } from "./shortenUrl.interface";
import { ShortenUrlModel } from "./shortenUrl.model";
import status from "http-status";

const createShortenUrlIntoDB = async (payload: TShortenUrl) => {
   const id = await redisClient.incr("global_id");
   const shortUrlId = encodeBase62(id);
   payload.shortCode = shortUrlId;
   payload.shortUrl = "https://minilink.com/" + shortUrlId;
   const result = await ShortenUrlModel.create(payload);

   await redisClient.set(`short:${shortUrlId}`, payload.originalUrl, { EX: 3600 });

   return result;
}

const getOrginalUrlFromDB = async (payload: string) => {

   const cachedUrl = await redisClient.get(`short:${payload}`);
   console.log(cachedUrl);
   if (cachedUrl) {
      return cachedUrl;
   }

   const result = await ShortenUrlModel.findOne({ payload });
   if (!result) {
      const err = new Error("Shorten URL not found");
      (err as any).statusCode = status.NOT_FOUND;
      throw err;
   }

   await redisClient.set(`short:${payload}`, result.originalUrl, { EX: 3600 });

   return result.originalUrl;

}

const getAllShortenUrlFromDB = async () => {
   const result = ShortenUrlModel.find();
   return result;
}

export const ShortenUrlServices = {
   createShortenUrlIntoDB,
   getOrginalUrlFromDB,
   getAllShortenUrlFromDB
}