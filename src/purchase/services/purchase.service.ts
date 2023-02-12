import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../config/base.service";
import { PurcharseDTO } from "../dto/purchase.dto";
import { PurchaseEntity } from "../entities/purchase.entity";

export class PurchaseService extends BaseService<PurchaseEntity>{

  constructor(){
    super(PurchaseEntity)
  }

  async findAllPurchase(): Promise<PurchaseEntity[]>{
    return (await this.execRepository).find()
  }

  async findPurchaseById(id: string): Promise<PurchaseEntity | null>{
    return (await this.execRepository).findOneBy({id})
  }

  async createPurchase(body: PurcharseDTO): Promise<PurchaseEntity> {
    return (await this.execRepository).save(body)
  }

  async updatePurchase(id: string, body: PurcharseDTO): Promise<UpdateResult> {
    return (await this.execRepository).update(id, body)
  }

  async deletePurchase(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete(id)
  }
}