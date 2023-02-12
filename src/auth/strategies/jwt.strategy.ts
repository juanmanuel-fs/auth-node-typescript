import {ExtractJwt, Strategy as JwtStr, StrategyOptions} from 'passport-jwt'
import { PayloadTokenInterface } from "../interfaces/auth.interface";
import { AuthService } from "../services/auth.service";
import { PassportUse } from "../utils/passport.use";

export class JwtStrategy extends AuthService{
  
  constructor(){
    super()
  }

  async validate(payload: PayloadTokenInterface, done: any){
    return done(null, payload)
  }

  get use() {
    return PassportUse<JwtStr, StrategyOptions, (payload: PayloadTokenInterface, done: any) => Promise<PayloadTokenInterface>> (
      "jwt",
      JwtStr,
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: this.getEnvironment("JWT_SECRET")
      },
      this.validate
    )
  }

}