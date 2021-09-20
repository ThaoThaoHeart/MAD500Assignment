import {Content} from "./content-interface";

export class ContentList {
  static contentCount = 0;
  _items: Content[];

  constructor(item: Content) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
  }
  get items(): Content[]{
    return this._items;
  }
  set items(newItems: Content[]){
    this._items = newItems;
  }
  increaseCount() {
    return ++ContentList.contentCount;
  }
}
