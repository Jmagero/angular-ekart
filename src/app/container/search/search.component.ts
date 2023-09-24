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

 //Assign a reference of HTML element to a property to a component
 @ViewChild('searchInput') searchInputEl: ElementRef;
 //Optional 2nd argument of @ViewChild
//  1. read: Use it to read the different token from the queried elements
//  2. static: Determines when the query is resolved
//     True 

 updateSearchText(){
   this.searchText = this.searchInputEl.nativeElement.value;
   this.searchTextChangedEvent.emit(this.searchText);
 }
//  onSearchTextChanged(){
//     this.searchTextChangedEvent.emit(this.searchText);
//   }
}
