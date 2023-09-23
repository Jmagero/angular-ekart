import { Component } from '@angular/core';
import { Product } from './Model/product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  addToCart:number = 0;
  product = {
    name:'iPhone 15',
    price: 789,
    color:"matte",
    discountedPrice: 8.5,
    inStock: 4
  }

  getDiscountedPrice(){
    return (this.product.price - (this.product.price * this.product.discountedPrice /100)).toFixed(2);
  }

  onNameChange(event : any){
    //  this.name = event.target.value;
  }
  onClickDecremet (){
     this.addToCart--;
  }

  onClickIncrement(event: any){
    this.addToCart++;
  }

  searchText:string = '';

  setSearchText(value:string){
    this.searchText = value;
  }

  selectedProduct:Product;
}
