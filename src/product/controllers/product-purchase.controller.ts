import { Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { ProductPurchaseService } from "../services/product-purchase.service";

export class ProductPurchaseController {

  private productPurchaseService: ProductPurchaseService
  private httpResponse: HttpResponse

  constructor() {
    this.productPurchaseService = new ProductPurchaseService
    this.httpResponse = new HttpResponse
  }

  async getProductPurchases(req: Request, res: Response){
    try {
      const data = await this.productPurchaseService.findAllProductPurchase()
      if(!data.length) return this.httpResponse.notFound(res, 'No hay datos')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async getProductPurchase(req: Request, res: Response){
    try {
      const data = await this.productPurchaseService.findProductPurchaseById(req.params.id)
      if(!data) return this.httpResponse.notFound(res, 'No hay datos')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async createProductPurchase(req: Request, res: Response){
    try {
      const data = await this.productPurchaseService.createProductPurchase(req.body)
      if(!data) return this.httpResponse.notFound(res, 'Error al crear ')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async updateProductPurchase(req: Request, res: Response){
    try {
      const data = await this.productPurchaseService.updateProductPurchase(req.params.id, req.body)
      if(!data) return this.httpResponse.notFound(res, 'Error al actualizar')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async deleteProductPurchase(req: Request, res: Response){
    try {
      const data = await this.productPurchaseService.deleteProductPurchase(req.params.id)
      if(!data) return this.httpResponse.notFound(res, 'Error al eliminar')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

}