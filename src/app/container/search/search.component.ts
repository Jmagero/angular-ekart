import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 searchText:string = '';
 
 @Output()
 searchTextChangedEvent: EventEmitter<string> = new EventEmitter<string>();

 @ViewChild('searchInput') searchInputEl: ElementRef;

 updateSearchText(){
   this.searchText = this.searchInputEl.nativeElement.value;
   this.searchTextChangedEvent.emit(this.searchText);
 }
//  onSearchTextChanged(){
//     this.searchTextChangedEvent.emit(this.searchText);
//   }
}
