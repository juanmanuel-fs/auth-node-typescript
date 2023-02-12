import { RoleType } from "../../user/dto/user.dto";

export interface PayloadTokenInterface{
  role: RoleType
  sub: string
}