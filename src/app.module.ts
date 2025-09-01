import { Module } from '@nestjs/common';
import { FinanceModule } from '@domains/finance/finance.module';
import { KnexModule } from './knex/knex.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule,
    FinanceModule
  ]
})
export class AppModule {}
