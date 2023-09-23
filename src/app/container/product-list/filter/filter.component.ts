import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  productAvailable: number;
  @Input()
  productsInStock: number;
  @Input()
  productsOutOfStock: number;
  
  @Output()
  selectedRadioBtnEvent = new EventEmitter<string>();

  selectedRadioButton: string = "all";

  onSelectRadioButtonChanged(){
    this.selectedRadioBtnEvent.emit(this.selectedRadioButton);
  }
}
