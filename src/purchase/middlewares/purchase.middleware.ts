import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { PurcharseDTO } from "../dto/purchase.dto";

export class PurchaseMiddleware{

  private httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse
  }

  purchaseMiddleware(req: Request, res: Response, next: NextFunction){

    const {} = req.body

    const valid = new PurcharseDTO()
    valid.status
    valid.paymentMethod
    valid.customer

    validate(valid).then(error => {
      if(error.length > 0) return this.httpResponse.error(res, error)
      else next()
    })

  }
}