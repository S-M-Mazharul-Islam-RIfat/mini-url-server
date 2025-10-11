import { Router } from "express";
import { ShortenUrlRoutes } from "../modules/shortenUrl/shortenUrl.route";

const router = Router();

const moduleRoutes = [
   {
      path: '/shorten-url',
      route: ShortenUrlRoutes
   }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;