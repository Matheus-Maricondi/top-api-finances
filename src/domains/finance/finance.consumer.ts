import { Controller } from '@nestjs/common';
import { FinanceService } from '@domains/finance/finance.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class FinanceConsumer {
    constructor(private readonly finance: FinanceService) {}

    @MessagePattern('finances')
    async getAll() {
       return await this.finance.findAll()
    }

    @MessagePattern('finance_create')
    async create(@Payload() data: any) {
        console.log('ffsdfsd', data)
       return await this.finance.create(data)
    }

    @MessagePattern('finance_update')
    async update(@Payload() data: any) {
        return await this.finance.update(data)
    }

    @MessagePattern('finance_delete')
    async delete(@Payload() data: any) {
        return await this.finance.delete(data)
    }
}