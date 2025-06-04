import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
   
  products: any[] = [];
  categories: any[] = [];
  selectedCategory: string = '';
  titleSearch: string = '';
  maxPrice: number = 200;
  loading: boolean = true;


  constructor(private _productService:ProductService , private _cartService:CartService){}
  ngOnInit(): void {
    this._productService.getProducts().subscribe(data => {
      console.log("Products data:", data);
      this.products = data.products;
      this.loading = false;
    });

    this._productService.getCategories().subscribe(data => {
      console.log("Categories data:", data);
      this.categories = data;
    });
  }

  resetFilters() {
    this.selectedCategory = '';
    this.titleSearch = '';
    this.maxPrice = 0;
  }
  addToCart(product: any) {
    this._cartService.addToCart(product);
    console.log("Product added to cart:", product);
  }


}
