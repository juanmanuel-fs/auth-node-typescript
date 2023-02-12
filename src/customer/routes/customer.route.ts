import { BaseRouter } from "../../shared/routes/router";
import { CustomerController } from "../controllers/customer.controller";
import { CustomerEntity } from "../entities/customer.entity";
import { CustomerMiddleware } from "../middlewares/customer.middleware";

export class CustomerRoute extends BaseRouter<CustomerController, CustomerMiddleware> {

  constructor() {
    super(CustomerController, CustomerMiddleware)
  }

  routes(): void {
    
    const nameRoute = '/customer'

    this.router.get(nameRoute, (req, res) => this.controller.getCustomers(req, res))
    this.router.get(nameRoute+'/:id', (req, res) => this.controller.getCustomer(req, res))
    this.router.post(
      nameRoute, 
      (req, res, next) => this.middleware.customerMiddleware(req, res, next), 
      (req, res) => this.controller.createCustomer(req, res)
    )
    this.router.put(nameRoute+'/:id', (req ,res) => this.controller.updateCustomer(req, res))
    this.router.delete(nameRoute+'/:id', (req ,res) => this.controller.updateCustomer(req, res))

  }
}