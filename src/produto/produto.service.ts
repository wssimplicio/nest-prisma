import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, produto } from '@prisma/client';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.produtoCreateInput): Promise<produto> {
    return this.prisma.produto.create({data});
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
