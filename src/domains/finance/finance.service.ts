import { IFinanceCreate, IFinanceUpdate } from '@entities/finance.entity';
import { Injectable } from '@nestjs/common';
import { FinanceRepositoryService } from '@repositories/finance/finance.repository.service';

@Injectable()
export class FinanceService {
    constructor(
        private readonly financeRepositoryService: FinanceRepositoryService,
    ) {}
    async findAll(): Promise<any | null> {
        return await this.financeRepositoryService.findAll();
    }
    async create(user: IFinanceCreate): Promise<any> {
        return await this.financeRepositoryService.create(user);
    }
    async update(user: IFinanceUpdate): Promise<any> {
        return await this.financeRepositoryService.update(user);
    }
    async delete(user: { id: number }): Promise<any> {
        return await this.financeRepositoryService.delete(user);
    }
}
