import { NextFunction, Request, Response } from "express";
import passport from "passport";
import { RoleType } from "../../user/dto/user.dto";
import { UserEntity } from "../../user/entities/user.entity";
import { HttpResponse } from "../response/http.response";

export class SharedMiddleware {
  
  public httpResponse: HttpResponse

  constructor(){
    this.httpResponse = new HttpResponse()
  }

  passAuth(type: string){
    return passport.authenticate(type,{session: false})
  }

  checkAdminRole(req: Request, res: Response, next: NextFunction){
    const user = req.user as UserEntity
    if(user.role !== RoleType.ADMIN) return this.httpResponse.unahuthorized(res, 'No tienes Permisos')
    return next()
  }
}