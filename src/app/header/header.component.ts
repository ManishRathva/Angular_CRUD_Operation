import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchResult:product['products']=[];
  constructor(private productService: ProductService , private router:Router,private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {}
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.productService.searchProduct(element.value).subscribe((result) => {
        this.searchResult = result;
      });
    }
  }
  submitData(val:string){
  this.router.navigate([`search/${val}`]);
  }
}
