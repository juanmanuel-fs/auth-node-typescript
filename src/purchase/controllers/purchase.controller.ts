import { Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { PurchaseService } from "../services/purchase.service";

export class PurcharseController {

  private purchaseService: PurchaseService
  private httpResponse: HttpResponse 

  constructor(){

    this.purchaseService = new PurchaseService()
    this.httpResponse = new HttpResponse()

  }

  async getPurchases(req:Request, res:Response){
    try {
      const data = await this.purchaseService.findAllPurchase()
      if (!data.length) {
        return this.httpResponse.notFound(res, 'No existe datos')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async getPurchase(req:Request, res:Response){
    try {
      const data = await this.purchaseService.findPurchaseById(req.params.id)
      if (!data) {
        return this.httpResponse.notFound(res, 'No existe dato')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async createPurchase(req:Request, res:Response){
    try {
      const data = await this.purchaseService.createPurchase(req.body)
      if (!data) {
        return this.httpResponse.notFound(res, 'Algun dato está erroneo')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async updatePurchase(req:Request, res:Response){
    try {
      const data = await this.purchaseService.updatePurchase(req.params.id, req.body)
      if (!data) {
        return this.httpResponse.notFound(res, 'Error al Actualizar')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async deletePurchase(req:Request, res:Response){
    try {
      const data = await this.purchaseService.deletePurchase(req.params.id)
      if (!data) {
        return this.httpResponse.notFound(res, 'Error al Eliminar')
      }
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

}