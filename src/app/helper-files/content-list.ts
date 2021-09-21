import {Content} from "./content-interface";

export class ContentList {
  _items: Content[];

  //Constructor

  constructor() {
    this._items = [];
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
    return "id: " + item.id + "</br>" +
      "author: " + item.author + "</br>" +
      "body: " + item.body + "</br>" +
      "title: " + item.title;
    }
  }

  // showAllContents(){
  //   for (let i = 0; i < this._items.length; i++){
  //     let item = this._items[i];
  //     return "id: " + item.id + "</br>" +
  //       "author: " + item.author + "</br>" +
  //       "body: " + item.body + "</br>" +
  //       "title: " + item.title;
  //   }
  // }



}
