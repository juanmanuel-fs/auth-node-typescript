import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { ProductDTO } from "../dto/product.dto";

export class ProductMiddleware{

  private httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse()
  }
  productMiddleware(req: Request, res: Response, next: NextFunction){
    const {name, description, price, category} = req.body

    const valid = new ProductDTO()
    valid.name= name
    valid.description= description
    valid.price= price
    valid.category= category

    validate(valid).then(error => {
      if(error.length > 0) return this.httpResponse.error(res, error)
      else next()
    })
  }
}