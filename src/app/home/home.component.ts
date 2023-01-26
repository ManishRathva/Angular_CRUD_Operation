import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
Product : product['products'] = [];
 constructor (private productService:ProductService){
this.productService.getProduct().subscribe((val : product[])=>{
this.Product = val as product[];
});
}
}
