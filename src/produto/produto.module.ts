import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProdutoController],
  providers: [PrismaService, ProdutoService],
})
export class ProdutoModule {}
