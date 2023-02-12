import { Request, Response } from "express"
import { HttpResponse } from "../../shared/response/http.response"
import { CategoryService } from "../services/category.service"

export class CategoryController {
  
  private categoryService: CategoryService
  private httpResponse: HttpResponse
  
  constructor(){
    this.categoryService = new CategoryService()
    this.httpResponse = new HttpResponse()
  }

  async getCategories(req: Request, res: Response){
    try {
      const data = await this.categoryService.findAllCategory()
      if(!data.length) return this.httpResponse.notFound(res,'No hay datos')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return  this.httpResponse.error(res, error)
    }
  }

  async getCategory(req: Request, res: Response){
    try {
      const data = await this.categoryService.findCategoryById(req.params.id)
      if(!data) return this.httpResponse.notFound(res, 'No hay dato')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return  this.httpResponse.error(res, error)
    }
  }

  async createCategory(req: Request, res: Response){
    try {
      const data = await this.categoryService.createCategory(req.body)
      if(!data) return this.httpResponse.error(res, 'No se ha guardado')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return  this.httpResponse.error(res, error)
    }
  }

  async updateCategory(req: Request, res: Response){
    try {
      const data = await this.categoryService.updateCategory(req.params.id ,req.body)
      if(!data.affected) return this.httpResponse.error(res, 'No se ha actualizado')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return  this.httpResponse.error(res, error)
    }
  }

  async deleteCategory(req: Request, res: Response){
    try {
      const data = await this.categoryService.deleteCategory(req.params.id)
      if(!data.affected) return this.httpResponse.error(res, 'No se ha eliminado')
      return this.httpResponse.ok(res, data)
    } catch (error) {
      return  this.httpResponse.error(res, error)
    }
  }

}