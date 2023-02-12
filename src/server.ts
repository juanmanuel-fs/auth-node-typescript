import "reflect-metadata"

import express from "express"
import morgan from "morgan"
import cors from "cors"
import { UserRoute } from "./user/routes/user.route"
import { ConfigServer } from "./config/config"
import { DataSource } from "typeorm"
import { CustomerRoute } from "./customer/routes/customer.route"
import { ProductRoute } from "./product/routes/product.route"
import { ProductPurchaseRoute } from "./product/routes/product-purchase.route"
import { CategoryRoute } from "./category/routes/category.route"
import { LoginStartegy } from "./auth/strategies/login.strategy"
import { JwtStrategy } from "./auth/strategies/jwt.strategy"
import { AuthRoute } from "./auth/routes/auth.route"

export class ServerBootstrap extends ConfigServer{
  
  public app: express.Application = express()
  private port: number = this.getNumberEnv('PORT')

  constructor(){

    super()

    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true}))
    this.passportUse()
    this.dbConnect()

    this.app.use(morgan('dev'))
    this.app.use(cors())

    this.app.use('/api', this.routers())

    this.app.use((req, res, next) => {
      return res.status(404).json({
        message: "Api Not Found"
      })
    })

    this.listen()

  }
  
  routers(): Array<express.Router> {
    
    return [
      new UserRoute().router,
      new CustomerRoute().router,
      new ProductRoute().router,
      new ProductPurchaseRoute().router,
      new ProductPurchaseRoute().router,
      new CategoryRoute().router,
      new AuthRoute().router
    ]
    
  }
  
  passportUse(){
    return [
      new LoginStartegy().use,
      new JwtStrategy().use
    ]
  }
  
  async dbConnect(): Promise<DataSource | void> {

    return await this.initConnect.then(()=>{
      console.log('Connect success')
    })
    .catch((err) => {
      console.log(err)
    })

  }

  public listen() {

    this.app.listen(this.port, () => {
      console.log(`Server listeng on port: ${this.port}`)
    })

  }

}

