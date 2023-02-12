import { BaseRouter } from "../../shared/routes/router";
import { ProductPurchaseController } from "../controllers/product-purchase.controller";
import { ProductPurchaseMiddleware } from "../middlewares/product-purchase.middleware";

export class ProductPurchaseRoute extends BaseRouter<ProductPurchaseController, ProductPurchaseMiddleware>{
 
  constructor() {
    super(ProductPurchaseController, ProductPurchaseMiddleware)
  }

  routes(): void {
    const nameRoute = '/product-purchase'

    this.router.get(nameRoute,(req, res) => this.controller.getProductPurchases(req, res))
    this.router.get(nameRoute+'/:id',(req, res) => this.controller.getProductPurchase(req, res))
    this.router.post(nameRoute,(req, res, next) => this.middleware.productPurchaseMiddleware(req, res, next), (req, res) => this.controller.createProductPurchase(req, res))
    this.router.put(nameRoute+'/:id',(req, res) => this.controller.updateProductPurchase(req, res))
    this.router.delete(nameRoute+'/id',(req, res) => this.controller.deleteProductPurchase(req, res))
  }
}