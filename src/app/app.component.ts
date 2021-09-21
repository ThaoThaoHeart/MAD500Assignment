import { Component } from '@angular/core';
import {ContentList} from "./helper-files/content-list";
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  static contentCount = 0;


  //When Instantiate, structure called.
  public ngOnInit(): void{
    let contentItem: Content = {
      id: 0,
      author: "Person",
      imgUrl: "Something",
      title: "A Title",
      body: "The Body"
    };
    this.processContent(contentItem);

    let list: ContentList;
    list = new ContentList();
    list.items = [{
      id: 0,
      author: "Another Person",
      imgUrl: "Something",
      title: "A Title",
      body: "The Body"
    }]
    console.log("This is the one", list.items);
  };

  public processContent(content: Content): void{
    console.log(content.body)
  }

}



