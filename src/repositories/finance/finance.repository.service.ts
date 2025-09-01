import { Injectable, Inject } from '@nestjs/common';
import { IFinanceCreate, IFinanceUpdate } from '@entities/finance.entity';
import { Knex } from 'knex';

@Injectable()
export class FinanceRepositoryService {
    constructor(
        @Inject('KNEX_CONNECTION') private readonly knex: Knex
  ) {}

    async findAll(): Promise<any | null> {
        const finances: any = await this.knex<any>('finances')
        return finances;
    }
    async create(finance: IFinanceCreate): Promise<IFinanceCreate[]> {
        console.log('create',finance)
        return await this.knex<IFinanceCreate>('finances').insert(finance).returning('*');
    }
    async update(finance: IFinanceUpdate): Promise<IFinanceUpdate[]> {
        return await this.knex<IFinanceUpdate>('finances').where({ id: finance.id }).update(finance).returning('*');
    }
    async delete(finance: { id: number }): Promise<any> {
        return await this.knex<IFinanceUpdate>('finances').where({ id: finance.id }).delete().returning('*');
    }
}