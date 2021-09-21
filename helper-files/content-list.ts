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
  add(item: Content){
    this._items.push(item);
  }
  //function returns number of items in array
  numOfItems(){
    return this._items.length;
  }

  //function that takes input of an index and returns reader-friendly html
  //output of a Content items properties
  showContentsOfItem(num: number) {
    if (num > this.numOfItems()-1) {
      return "Error, Index unreachable."
    } else {
    let item = this._items[num];
    return item.id + "\n" +
      item.author + "\n" +
      item.body + "\n" +
      item.title;
    }
  }

  increaseCount() {
    return ++ContentList.contentCount;
  }

}
