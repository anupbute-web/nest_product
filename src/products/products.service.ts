import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private productArray:CreateProductDto[]=[
        {
          'id':1,
          'image_link':'',
          'pr_name':'vivo',
          'sub_category':'mobile',
          'category':'electronics',
          'categoryId':1,
          'discription':'acds',
          'prise':'$2000'
        }
    ];

    oneProduct(id:number){
        const product = this.productArray.find(my_product=>my_product.id==id)

        if(!product){
            return 'not found';
        }

        return product;
    }

    allProduct(){
        return this.productArray;
    }
    
    addProduct(user:CreateProductDto){
        const check = this.productArray.push(user);

        if(check) return 'product added';

        return 'product not added';
    }

    roleUser(category:string){
        const product = this.productArray.filter(my_product=>my_product.category==category)
        if(product.length==0){
            return 'not found';
        }

        return product;
    }
}
