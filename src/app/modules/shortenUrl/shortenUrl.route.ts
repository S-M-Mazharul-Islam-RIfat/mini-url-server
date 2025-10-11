import express from 'express';
import { ShortenUrlControllers } from './shortenUrl.controller';

const router = express.Router();

router.post('/create-shortenUrl', ShortenUrlControllers.createShortenUrl);
router.get('/:shortenUrl', ShortenUrlControllers.getOrginalUrl);
router.get('/', ShortenUrlControllers.getAllShortenUrl);

export const ShortenUrlRoutes = router;