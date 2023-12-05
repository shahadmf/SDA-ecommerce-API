import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const status = res.statusCode !== 200 ? res.statusCode : 200;
    res.status(status).json({
        message: err.message,
    });
};
