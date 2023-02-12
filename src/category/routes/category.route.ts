import { BaseRouter } from "../../shared/routes/router";
import { CategoryController } from "../controllers/category.controller";
import { CategoryMiddleware } from "../middlewares/category.middleware";

export class CategoryRoute extends BaseRouter<CategoryController, CategoryMiddleware> {

  constructor(){
    super(CategoryController,CategoryMiddleware)
  }

  routes(): void {
    const nameRoute = '/category'
    this.router.get(nameRoute, (req, res) => this.controller.getCategories(req ,res))
    this.router.get(nameRoute, (req, res) => this.controller.getCategory(req ,res))
    this.router.post(nameRoute, (req, res, next) => this.middleware.categoryMiddleware(req ,res, next),(req, res) => this.controller.createCategory(req ,res))
    this.router.put(nameRoute, (req, res) => this.controller.updateCategory(req ,res))
    this.router.delete(nameRoute, (req, res) => this.controller.deleteCategory(req ,res))
  }
}