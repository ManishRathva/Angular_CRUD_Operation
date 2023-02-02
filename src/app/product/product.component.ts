import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
isHide:boolean = true;
Product :product['products']=[];
url='';
constructor(private active: ActivatedRoute,private productServices:ProductService){}
ngOnInit(): void {
      let productId = this.active.snapshot.paramMap.get('productId')
      productId && this.productServices.getProductById(productId).subscribe((result )=>{
      this.Product = result as product;
    });
}
immg(data:any){
this.url =data;
this.isHide = false;
}
}
