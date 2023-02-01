import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../shared/models/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: product['products'] = [];

  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService
  ) {}
  totalLength:any;
  page:number = 1 ;



  ngOnInit(): void {
    let query = this.activatedRoute.snapshot.paramMap.get('query');
    console.log(query);
    if(query === null){
      this.productService.getProduct().subscribe((val: product[]) => {
        this.searchResult = val as product[];
        this.totalLength = product.length;
        console.log(this.searchResult);

      });
  }else{
    query &&
      this.productService.searchProduct(query).subscribe((result) => {
        this.searchResult = result;
        console.log(this.searchResult);
      });
    }
    }
  }

