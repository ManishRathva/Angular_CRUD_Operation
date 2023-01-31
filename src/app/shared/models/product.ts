export class product {
  static splice(productId: number) {
    throw new Error('Method not implemented.');
  }
  id!:number;
  title!:string;
  description!:string;
  price!:number;
  discountPercentage!:number;
  rating!:number;
  stock!:number;
  brand!:string;
  category!:string;
  thumbnail!:string;
  images!:string;
  products: any;
}
export class nproduct{
  title!:string;
  thumbnail!:string;
}
