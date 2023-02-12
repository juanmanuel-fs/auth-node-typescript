import { BaseRouter } from "../../shared/routes/router";
import { ProductController } from "../controllers/product.controller";
import { ProductMiddleware } from "../middlewares/product.middleware";

export class ProductRoute extends BaseRouter<ProductController, ProductMiddleware>{

  constructor(){
    super(ProductController, ProductMiddleware)
  }

  routes(): void {
    const nameRoute = '/product'
    
    this.router.get(nameRoute, (req, res) => this.controller.getProducts(req, res))
    this.router.get(nameRoute+'/:id', (req, res) => this.controller.getProduct(req,res))
    this.router.post(nameRoute, (req, res, next) => this.middleware.productMiddleware(req, res, next), (req, res) => this.controller.createProduct(req, res))
    this.router.put(nameRoute+'/:id', (req, res) => this.controller.updateProduct(req, res))
    this.router.delete(nameRoute+'/:id', (req, res) => this.controller.deleteProduct(req, res))

  }

}