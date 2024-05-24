import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ProductsListComponent } from './components/products-list.component';
import { AddProductComponent } from './components/add-product.component';
import { DeleteProductComponent } from './components/delete-product.component';
import { ProductService } from './services/product.service';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';  

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    DeleteProductComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
