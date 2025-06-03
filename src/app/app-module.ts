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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    FooterComponent,
    ProductFilterPipe,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
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
