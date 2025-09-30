import { IsEmail, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty({message:'id required'})
    @IsNumber({},{message:'number required'})
    id:number;

    @IsNotEmpty({message:'image link is required'})
    image_link:string;

    @IsNotEmpty({message:'pr_name required'})
    pr_name:string;

    @IsNotEmpty({message:'category required'})
    category:string

    @IsNotEmpty({message:'sub category required'})
    sub_category:string

    @IsNotEmpty({message:'categoryId required'})
    categoryId:number

    @IsNotEmpty({message:'discription required'})
    discription:string

    @IsNotEmpty({message:'prise required'})
    prise:string
} 