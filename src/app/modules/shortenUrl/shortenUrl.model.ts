import { model, Schema } from "mongoose";
import { TShortenUrl } from "./shortenUrl.interface";

const shortenUrlSchema = new Schema<TShortenUrl>({
   id: {
      type: String,
   },
   originalUrl: {
      type: String,
   },
   shortCode: {
      type: String,
   },
   shortUrl: {
      type: String,
   }
}, {
   timestamps: true
})

export const ShortenUrlModel = model<TShortenUrl>('shortenUrl', shortenUrlSchema)