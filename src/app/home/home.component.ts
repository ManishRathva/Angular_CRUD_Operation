import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';
import { FormGroup ,FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addingData = new FormGroup({
    thumbnail: new FormControl('',Validators.required),
   title: new FormControl('',Validators.required),
 })
  neweditData: product['products'] =[];
  url = '';
  Product: product['products']=[];
  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((val: product[]) => {
      this.Product = val as product[];
    });
  }
  ngOnInit(): void {}
  addData(add:any) {
    console.log(add);
    this.Product['products'].push({ title:add, thumbnail:this.url });
    console.log('Data Added successfully');
  }
  onselectFile(e: any) {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
      this.url = event.target.result;
      };
    }
  }
  deleteData(i: number) {
    this.Product['products'].splice(i, 1);
    console.log('delete successfulyy');
  }
  editData(id: product) {
    this.neweditData = id;
    this.url = this.neweditData.thumbnail;
  }
  onSubmit(name: product) {
    this.neweditData.thumbnail = this.url;
    this.neweditData.title = name.title;
    this.url ='';
  }
}
