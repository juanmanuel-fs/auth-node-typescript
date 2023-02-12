import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { CustomerEntity } from "../../customer/entities/customer.entity";

export class PurcharseDTO extends BaseDTO{

  @IsNotEmpty()
  status!: StatusPurchare

  @IsNotEmpty()
  paymentMethod!: PaymentMethod

  @IsNotEmpty()
  customer!: CustomerEntity

}

export enum StatusPurchare {
  IN_CART = "IN_CART",
  PENDING_PAYMENT = "PENDING_PAYMENT",
  PENDDING_APPROVED = "PENDING_APPROVED",
  APPROVED = "APPROVED",
  ERROR = "ERROR",
}

export enum PaymentMethod {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  PAYPAL = "PAYPAL",
  CRYPTOCURRENCY = "CRYPTOCURRENCY"
}