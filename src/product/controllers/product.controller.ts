import { Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { ProductService } from "../services/product.service";

export class ProductController {
  
  private productService : ProductService
  private httpResponse : HttpResponse
  
  constructor(){
    this.productService = new ProductService()
    this.httpResponse = new HttpResponse()
  }

  async getProducts(req: Request, res: Response) {
    try {
      const data = await this.productService.findAllProduct()
      if(!data.length) return this.httpResponse.notFound(res, 'No hay datos')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.findProductById(req.params.id)
      if(!data) return this.httpResponse.notFound(res, 'No hay dato')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.createProduct(req.body)
      if(!data) return this.httpResponse.notFound(res, 'No se pudo guardar')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.updateProduct(req.params.id, req.body)
      if(!data.affected) return this.httpResponse.notFound(res, 'No se pudo actualizar')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.deleteProduct(req.params.id)
      if(!data.affected) return this.httpResponse.notFound(res, 'No se pudo eliminar')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return this.httpResponse.error(res, error)
    }
  }

}