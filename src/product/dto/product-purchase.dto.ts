import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../entities/product.entity";

export class ProductPurchaseDTO extends BaseDTO {
  
  @IsNotEmpty()
  quantityProduct!: number

  @IsNotEmpty()
  totalPrice!: number

  @IsOptional()
  product!: ProductEntity

  @IsNotEmpty()
  purchase!: PurchaseEntity

}