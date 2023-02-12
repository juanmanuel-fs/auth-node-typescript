import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { ProductPurchaseDTO } from "../dto/product-purchase.dto";

export class ProductPurchaseMiddleware{

  private httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse()
  }

  productPurchaseMiddleware(req: Request, res: Response, next: NextFunction){

    const {quantityProduct, totalPrice, product, purchase} = req.body

    const valid = new ProductPurchaseDTO()
    valid.quantityProduct= quantityProduct
    valid.totalPrice= totalPrice
    valid.product= product
    valid.purchase= purchase

    validate(valid).then(error => {
      if(error.length > 0) return this.httpResponse.error(res, error)
      else next()
    })

  }
}