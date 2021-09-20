import {Content} from "./content-interface";

export class ContentList {
  static contentCount = 0;
  _items: Content[];

  //Constructor
  constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
  }

  //getter function returns Content array
  get items(): Content[]{
    return this._items;
  }
  set items(newItems: Content[]){
    this._items = newItems;
  }

  //add function that adds 1 Content to end of array
  //function returns number of items in array

  //function that takes input of an index and returns reader-friendly html
  //output of a Content items properties
  increaseCount() {
    return ++ContentList.contentCount;
  }

}
