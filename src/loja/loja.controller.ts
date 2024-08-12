import { Body, Controller, Get, Post } from '@nestjs/common';
import { LojaService } from './loja.service';
import { CreateLojaDto } from './dto/create-loja.dto';

@Controller('loja')
export class LojaController {

    constructor(private readonly service: LojaService) {}

    @Get()
    findAllLojas() {
       return this.service.findAllLoja();
    }

    @Post('add')
    create(@Body() data: CreateLojaDto) {
        this.service.createLoja(data);
    }
}
