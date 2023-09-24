import { Component, Input } from '@angular/core';
import { Product } from '../Model/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product;

  @Input()
  productListComp: ProductListComponent;

  ngOnInit(){
     this.product = this.productListComp.selectedProduct;
  }
}
