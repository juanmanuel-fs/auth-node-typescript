import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { CategoryDTO } from "../dto/category.dto";

export class CategoryMiddleware {

  private httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse()
  }

  categoryMiddleware(req: Request, res: Response, next: NextFunction){

    const {name, colorBadge} = req.body
    
    const valid = new CategoryDTO()
    valid.name = name
    valid.colorBadge = colorBadge

    validate(valid).then((error) => {
      if(error.length > 0){
        return this.httpResponse.error(res, error)
      }
      else {
        next()
      }
    })
  }
}