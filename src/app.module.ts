import { Module } from '@nestjs/common';
import { LojaModule } from './loja/loja.module';

@Module({
  imports: [LojaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
