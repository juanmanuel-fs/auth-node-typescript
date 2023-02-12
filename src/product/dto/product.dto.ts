import { IsNotEmpty } from "class-validator";
import { CategoryEntity } from "../../category/entities/category.entity";
import { BaseDTO } from "../../config/base.dto";

export class ProductDTO extends BaseDTO {

  @IsNotEmpty()
  name!: string

  @IsNotEmpty()
  description!: string

  @IsNotEmpty()
  price!: number

  @IsNotEmpty()
  category!: CategoryEntity

}