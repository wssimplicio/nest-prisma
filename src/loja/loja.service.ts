import { Injectable } from '@nestjs/common';
import { loja, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LojaService {
    constructor(private readonly prisma: PrismaService) {}

    async createLoja(data: Prisma.lojaCreateInput): Promise<loja> {
        return this.prisma.loja.create({
            data
        });
    }

    async findAllLoja() {
        return this.prisma.loja.findMany();
    }
}
