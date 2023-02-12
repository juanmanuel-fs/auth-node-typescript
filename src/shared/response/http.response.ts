import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SEVER_ERROR = 500
}

export class HttpResponse {
  
  ok( res: Response, data?: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: "success",
      data
    })
  }

  notFound( res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: "Not Found",
      data
    })
  }

  unahuthorized( res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message: "Unauthorized",
      data
    })
  }

  forbidden( res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      message: "Forbidden",
      data
    })
  }
  
  error( res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SEVER_ERROR).json({
      status: HttpStatus.INTERNAL_SEVER_ERROR,
      message: "Internal Server Error",
      data
    })
  }

}