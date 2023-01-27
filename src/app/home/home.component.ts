import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';
import { newProduct, product } from '../shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
newData :any[] = [];
Product : product['products'] = [];
 constructor (private productService:ProductService){
this.productService.getProduct().subscribe((val : product[])=>{
this.Product = val as product[];
});
}
ngOnInit(): void {

}
addData(name:any,image:any){
this.newData.push({thumbnail:image,title:name});
}
}
