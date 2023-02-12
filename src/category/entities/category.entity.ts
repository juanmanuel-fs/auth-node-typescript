import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";
import { ColorBadge } from "../dto/category.dto";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity{

  @Column()
  name!: string

  @Column({
    type: "enum",
    enum: ColorBadge,
    default: ColorBadge.PRIMARY
  })
  colorBadge?: ColorBadge

  @OneToMany(() => ProductEntity, (products) => products.category)
  products!: ProductEntity
}