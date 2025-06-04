import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any;   loading = true;

  constructor(private productService: ProductService, private route: ActivatedRoute ,private cartService:CartService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=> {
      this.productService.getProductById(+params.get('id')!)
      .subscribe({
        next: (response) => {
          console.log('Product details fetched successfully:', response);
          this.product = response;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching product details:', err);
        }
      })
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log("Product added to cart:", product);
  }

}
