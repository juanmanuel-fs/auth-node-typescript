import {Strategy as LocalStrategy, VerifyFunction} from 'passport-local'
import { UserEntity } from "../../user/entities/user.entity"
import { AuthService } from "../services/auth.service"
import { PassportUse } from "../utils/passport.use"

const authService: AuthService = new AuthService();

export class LoginStartegy {

  async validate(username: string, password: string, done: any): Promise<UserEntity> {
    const user = await authService.validateUser(username, password)
    console.log(user, user)
    if(!user) return done(null, false, {message: "Invalid username or password"})
    return done(null, user)
  }

  get use(){
    return PassportUse<LocalStrategy, Object, VerifyFunction>(
      "login",
      LocalStrategy,
      {
        usernameField: "username",
        passwordField: "password"
      },
      this.validate
    )
  }

}