import { Body, Controller, Get, Post } from '@nestjs/common';
import { LojaService } from './loja.service';

@Controller('loja')
export class LojaController {

    constructor(private readonly service: LojaService) {}

    @Get('lista-lojas')
    findAllLojas() {
       return this.service.findAllLoja();
    }

    @Post('cria-loja')
    createLoja(@Body() data: {descricao: string}) {
        this.service.createLoja(data);
    }
}
