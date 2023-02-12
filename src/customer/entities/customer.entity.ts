import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { UserEntity } from "../../user/entities/user.entity";

@Entity({ name: "customer"})
export class CustomerEntity extends BaseEntity {
  
  @Column()
  address!:string

  @Column({
    unique: true
  })
  dni!:string

  @OneToOne(() => UserEntity, (user) => user.customer, { nullable: false})
  @JoinColumn({ name: "user_id"})
  user!: UserEntity

  @OneToMany(() => PurchaseEntity, (purchases) => purchases.customer)
  purchases!: PurchaseEntity[]


}