import { Module } from '@nestjs/common';
import { LojaController } from './loja.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { LojaService } from './loja.service';

@Module({
  imports: [],
  controllers: [LojaController],
  providers: [PrismaService, LojaService],
})
export class LojaModule {}
