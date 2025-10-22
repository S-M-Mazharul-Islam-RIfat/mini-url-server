import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import { ShortenUrlServices } from "./shortenUrl.service";

const createShortenUrl = catchAsync(async (req: Request, res: Response) => {
   const result = await ShortenUrlServices.createShortenUrlIntoDB(req.body);
   sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'Shorten url is created successfully',
      data: result
   })
})

const getOrginalUrl = catchAsync(async (req: Request, res: Response) => {
   const { shortenUrl } = req.params;
   const result = await ShortenUrlServices.getOrginalUrlFromDB(shortenUrl);
   return res.redirect(result!);
})

const getAllShortenUrl = catchAsync(async (req: Request, res: Response) => {
   const result = await ShortenUrlServices.getAllShortenUrlFromDB();
   sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: 'All shorten url is retrived successfully',
      data: result
   })
})

export const ShortenUrlControllers = {
   createShortenUrl,
   getOrginalUrl,
   getAllShortenUrl
}