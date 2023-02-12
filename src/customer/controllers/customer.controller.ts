import { Request, Response } from "express"
import { HttpResponse } from "../../shared/response/http.response"
import { CustomerService } from "../services/customer.service"

export class CustomerController {

  private customerService: CustomerService 
  private httpResponse: HttpResponse

  constructor() {
    this.customerService = new CustomerService()
    this.httpResponse = new HttpResponse()
  }

  async getCustomers(req: Request, res: Response){
    try {
      const data = await this.customerService.findAllCustomer()
      if(!data.length) return this.httpResponse.notFound(res, 'No hay datos')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async getCustomer(req: Request, res: Response){
    try {
      const data = await this.customerService.findCustomerById(req.params.id)
      if(!data) return this.httpResponse.notFound(res, 'No hay dato')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }


  async createCustomer(req: Request, res: Response){
    try {
      const data = await this.customerService.cretaeCustomer(req.body)
      if(!data) return this.httpResponse.notFound(res, 'No se pudo crear customer')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async updateCustomer(req: Request, res: Response){
    try {
      const data = await this.customerService.updateCustomer(req.params.id, req.body)
      if(!data.affected) return this.httpResponse.notFound(res, 'No se pudo actualizar customer')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async deleteCustomer(req: Request, res: Response){
    try {
      const data = await this.customerService.deleteCustomer(req.params.id)
      if(!data.affected) return this.httpResponse.notFound(res, 'No se pudo eliminar customer')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

}