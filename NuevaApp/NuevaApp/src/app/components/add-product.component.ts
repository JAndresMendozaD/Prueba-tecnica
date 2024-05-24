
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  newProduct: any = { name: '', price: 0, quantity: 0 };

  constructor(private productService: ProductService) { }

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(
      (data: any) => {
        console.log('Product added successfully:', data);
        // Optionally, reset the form
        this.newProduct = { name: '', price: 0, quantity: 0 };
      },
      error => {
        console.error('Error adding product:', error);
      }
    );
  }
}
