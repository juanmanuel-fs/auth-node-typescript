import { Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { UserService } from "../services/user.service";

export class UserController {

  private userService : UserService
  private httpResponse : HttpResponse

  constructor(){
    this.userService = new UserService()
    this.httpResponse = new HttpResponse()
  }

  async getUsers(req: Request, res: Response) {

    try {
      const data = await this.userService.findAllUser()

      if(!data.length){
        return this.httpResponse.notFound(res, 'No existe datos')
      }

      return this.httpResponse.ok(res, data)
      
    } catch (error) {
      return this.httpResponse.error(res, error)
    }

  }

  async getUser(req: Request, res: Response) {

    try {
      const data = await this.userService.findUserById(req.params.id)
      if(!data){
        return this.httpResponse.notFound(res, 'No existe dato')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }

  }

  async getUserWithRelation(req: Request, res: Response) {

    try {
      const data = await this.userService.findUserWithRelation(req.params.id)
      if(!data){
        return this.httpResponse.notFound(res, 'No existe dato')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }

  }

  async createUser(req: Request, res: Response) {

    try {
      const data = await this.userService.createUser(req.body)

      return this.httpResponse.ok(res, data)
    }
    catch (error) {
      return this.httpResponse.error(res, error) 
    }

  }

  async updateUser(req: Request, res: Response) {

    try {
      const result = await this.userService.updateUser( req.params.id, req.body)

      if(!result.affected){
        return this.httpResponse.notFound(res, 'Error al Actualizar')
      }

      return this.httpResponse.ok(res, result)
    } catch (error) {
      return this.httpResponse.error(res, error) 
    }

  }

  async deleteUser(req: Request, res: Response) {

    try {
      const result = await this.userService.deleteUser(req.params.id)

      if(!result.affected){
        return this.httpResponse.notFound(res, 'Error al Eliminar')
      }
      
      return this.httpResponse.ok(res, result)
    } catch (error) {
      return this.httpResponse.error(res, error) 
    }

  }
  
}