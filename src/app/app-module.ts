import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './pipes/product-filter-pipe';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing/app-routing-module';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    FooterComponent,
    ProductFilterPipe,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    ProductService
  ],
  bootstrap: [App]
})
export class AppModule { }
