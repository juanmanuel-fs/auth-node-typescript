import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { ProductPurchaseDTO } from "../dto/product-purchase.dto";
import { ProductPurchaseEntity } from "../entities/product-purchase.entity";

export class ProductPurchaseService extends BaseService<ProductPurchaseEntity> {

  constructor() {
    super(ProductPurchaseEntity)
  }

  async findAllProductPurchase(): Promise<ProductPurchaseEntity[]> {
    return (await this.execRepository).find()
  }

  async findProductPurchaseById(id: string): Promise<ProductPurchaseEntity | null> {
    return (await this.execRepository).findOneBy({id})
  }

  async createProductPurchase(body: ProductPurchaseDTO): Promise<ProductPurchaseEntity> {
    return (await this.execRepository).save(body)
  }

  async updateProductPurchase(id: string, body: ProductPurchaseDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body)
  }
  async deleteProductPurchase(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete(id)
  }

}