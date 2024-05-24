import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {
  @Input() productId!: string;
  @Output() productDeleted = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(response => {
      console.log('Producto eliminado', response);
      this.productDeleted.emit(this.productId); // Emitir el evento con el ID del producto eliminado
    }, error => {
      console.error('Error al eliminar el producto', error);
    });
  }
}
