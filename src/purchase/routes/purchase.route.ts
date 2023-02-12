import { BaseRouter } from "../../shared/routes/router";
import { PurcharseController } from "../controllers/purchase.controller";
import { PurchaseMiddleware } from "../middlewares/purchase.middleware";

export class PucharseRouter extends BaseRouter<PurcharseController, PurchaseMiddleware>{

  constructor(){
    super(PurcharseController, PurchaseMiddleware)
  }

  routes(): void {

    const nameRoute = "/purchase" 
    
    this.router.get(nameRoute, (req, res ) => this.controller.getPurchases(req, res))
    this.router.get(nameRoute+'/:id', (req, res ) => this.controller.getPurchase(req, res))
    this.router.post(nameRoute, (req, res, next) => this.middleware.purchaseMiddleware(req, res, next), (req, res ) => this.controller.getPurchase(req, res))
    this.router.put(nameRoute+'/:id', (req, res ) => this.controller.updatePurchase(req, res))
    this.router.delete(nameRoute+'/:id', (req, res ) => this.controller.deletePurchase(req, res))

  }

}