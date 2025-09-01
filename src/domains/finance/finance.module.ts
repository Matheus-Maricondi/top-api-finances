import { Module } from '@nestjs/common';
import { FinanceConsumer } from '@domains/finance/finance.consumer';
import { FinanceService } from '@domains/finance/finance.service';
import { FinanceRepositoryModule } from '@repositories/finance/finance.repository.module';

@Module({
  imports: [
    FinanceRepositoryModule
  ],
  controllers: [FinanceConsumer],
  providers: [FinanceService]
})
export class FinanceModule {}
