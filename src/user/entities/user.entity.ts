import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entity";
import { RoleType } from "../dto/user.dto";

@Entity({name: "user"})
export class UserEntity extends BaseEntity {

  @Column({
    name: "user_name",
    length: 64
  })
  username!: string

  @Column({
    length: 64
  })
  name!: string
  
  @Column({
    length: 64
  })
  lastname!: string

  @Column()
  email!: string

  @Column({
    select: false
  })
  password!: string

  @Column()
  city!: string

  @Column({
    length: 32
  })
  province!: string

  @Column({
    type: "enum",
    enum: RoleType,
    default: RoleType.CUSTOMER
  })
  role!: RoleType

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity

}