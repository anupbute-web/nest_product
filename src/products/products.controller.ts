import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get() 
    allProduct(@Query('category') category:string){
        if (!category) return this.productsService.allProduct();
        return this.productsService.roleUser(category);
    }

    @Get(':id')
    oneProduct(@Param('id') id:string){
        console.log(id);
        return this.productsService.oneProduct(+id);
    }

    @Post()
    addProduct(@Body() product:CreateProductDto){
        return this.productsService.addProduct(product);
    }
}
