import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "./product.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";

@Entity({ name: "product_purchase"})
export class ProductPurchaseEntity extends BaseEntity{

  @Column({
    name: "quantity_product"  
  })
  quantityProduct!: number

  @Column({
    name: "total_price",
    type: "decimal",
    precision: 8,
    scale: 2
  })
  totalPrice!: number

  @ManyToOne(() => ProductEntity, (product) => product.productPurchase, {nullable: false})
  @JoinColumn({ name: "product_id" })
  product!: ProductEntity

  @ManyToOne(() => PurchaseEntity, (purchase) => purchase.productPurchase, {nullable: false})
  @JoinColumn({ name: "purchase_id" })
  purchase!: PurchaseEntity

}