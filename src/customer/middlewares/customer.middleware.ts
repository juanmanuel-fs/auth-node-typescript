import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { CustomerDTO } from "../dto/customer.dto";

export class CustomerMiddleware{

  private httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse()
  }

  customerMiddleware(req: Request, res:Response, next: NextFunction){
    const {adress, dni, user} = req.body

    const valid = new CustomerDTO()
    valid.address= adress
    valid.dni= dni
    valid.user= user

    validate(valid).then(error => {
      if(error.length > 0){
        return this.httpResponse.error(res, error)
      }
      else{
        next()
      }
    })

  }
}