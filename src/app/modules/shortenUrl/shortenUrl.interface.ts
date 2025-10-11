export type TShortenUrl = {
   id: string;
   originalUrl: string;
   shortCode?: string;
   shortUrl?: string;
   expiresAt?: Date | null;
}
