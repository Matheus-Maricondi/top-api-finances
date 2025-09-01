import { Module } from '@nestjs/common';
import { FinanceRepositoryService } from '@repositories/finance/finance.repository.service';

@Module({
    providers: [FinanceRepositoryService],
    exports: [FinanceRepositoryService],
})
export class FinanceRepositoryModule {}
