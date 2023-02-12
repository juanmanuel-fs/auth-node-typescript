import { Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { UserEntity } from "../../user/entities/user.entity";
import { AuthService } from "../services/auth.service";

export class AuthController{

  private authService: AuthService
  private httpResponse: HttpResponse
  
  constructor(){
    this.httpResponse = new HttpResponse()
    this.authService = new AuthService()
  }

  async login(req: Request, res: Response){
    try {
      const userEncode = req.user as UserEntity
      console.log('dsds')
      const encode = await this.authService.generateJWT(userEncode);

      if(!encode) return this.httpResponse.unahuthorized(res, 'Notienes permisos')

      res.header('Content-Type', "appication/json")
      res.cookie('accessToken', encode.accessToken, {maxAge: 60000 * 60});
      res.write(JSON.stringify(encode))
      res.end()
    } catch (error) {
      console.log(error)
      return this.httpResponse.error(res, error)
    }
  }
}