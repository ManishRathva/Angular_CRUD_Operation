import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  url = '';
  Product: product['products'] = [];
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((val: product[]) => {
      this.Product = val as product[];
    });
  }
  ngOnInit(): void {

  }
  addData(name:string,image:string) {
   this.Product['products'].push({title:name,thumbnail:this.url});
   console.log("Data Added successfully");

  }
  onselectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }
  deleteData(i:number){
  this.Product['products'].splice(i,1);
  console.log(this.Product);
  console.log('delete successfulyy');
  }
  updateData(name:string,image:string){
  
  }
}
