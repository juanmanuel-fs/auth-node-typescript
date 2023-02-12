import { Column, Entity, JoinColumn, ManyToOne, OneToMany} from "typeorm";
import { CategoryEntity } from "../../category/entities/category.entity";
import { BaseEntity } from "../../config/base.entity";
import { ProductPurchaseEntity } from "./product-purchase.entity";

@Entity({ name: "product"})
export class ProductEntity extends BaseEntity {
  
  @Column()
  name!: string

  @Column()
  description!: string

  @Column({
    type: "decimal",
    precision: 8,
    scale: 2
  })
  price!: number

  @ManyToOne(() => CategoryEntity, (category) => category.products, {nullable: false})
  @JoinColumn({ name: "category_id" })
  category!: CategoryEntity

  @OneToMany(() => ProductPurchaseEntity, (productPurchase) => productPurchase.product )
  productPurchase!: ProductPurchaseEntity[]

}