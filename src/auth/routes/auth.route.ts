import { SharedMiddleware } from "../../shared/middlewares/shared.middleware";
import { BaseRouter } from "../../shared/routes/router";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoute extends BaseRouter<AuthController, SharedMiddleware > {

  constructor(){
    super(AuthController, SharedMiddleware)
  }

  routes(): void {
    this.router.post(
      '/login', 
      this.middleware.passAuth("login"), 
      (req, res) => this.controller.login(req, res)
    )
    this.router.get('/logout', (req, res) => {
      res.json({data: 'rewrew'})
    })
  }
}