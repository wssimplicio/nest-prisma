import { Module } from '@nestjs/common';
import { LojaModule } from './loja/loja.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [LojaModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
