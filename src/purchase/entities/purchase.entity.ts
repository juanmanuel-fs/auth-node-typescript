import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductPurchaseEntity } from "../../product/entities/product-purchase.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { StatusPurchare } from "../dto/purchase.dto";

@Entity({ name: "purchase"})
export class PurchaseEntity extends BaseEntity {
  
  @Column({
    type: "enum",
    enum: StatusPurchare,
    nullable: false
  })
  status!: StatusPurchare

  @Column()
  paymentMethod!: string

  @ManyToOne(() => CustomerEntity, (customer) => customer.purchases, {nullable: false})
  @JoinColumn({ name: "customer_id" })
  customer!: CustomerEntity

  @OneToMany(() => ProductPurchaseEntity, (productPurchase) => productPurchase.purchase )
  productPurchase!: ProductPurchaseEntity[]

}