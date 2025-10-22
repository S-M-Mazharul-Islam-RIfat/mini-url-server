import { Router } from "express";
import { ShortenUrlRoutes } from "../modules/shortenUrl/shortenUrl.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();

const moduleRoutes = [
   {
      path: '/shorten-url',
      route: ShortenUrlRoutes
   },
   {
      path: '/auth',
      route: AuthRoutes
   }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;