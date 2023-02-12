import { UserController } from "../controllers/user.controller";
import { BaseRouter } from "../../shared/routes/router";
import { UserMiddleware } from "../middlewares/user.middleware";
import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";

const sharedMiddleware: SharedMiddleware = new SharedMiddleware()

export class UserRoute extends BaseRouter<UserController, UserMiddleware>{

  constructor(){
    super(UserController, UserMiddleware)
  }

  routes(): void {

    const nameRoute = '/user'

    this.router.get(nameRoute, (req, res) => this.controller.getUsers(req, res))
    this.router.get(nameRoute+'/:id', (req, res) => this.controller.getUser(req, res))
    this.router.get(nameRoute+'-customer/:id', (req, res) => this.controller.getUserWithRelation(req, res))
    this.router.post(nameRoute, (req, res, next) => this.middleware.userValidator(req, res, next) ,(req, res) => this.controller.createUser(req, res))
    this.router.put(nameRoute+'/:id', (req, res) => this.controller.updateUser(req, res))
    this.router.delete(
      nameRoute+'/:id', 
      sharedMiddleware.passAuth('jwt'),
      (req, res, next) => sharedMiddleware.checkAdminRole(req, res, next), 
      (req, res) => this.controller.deleteUser(req, res)
    )

  }

}