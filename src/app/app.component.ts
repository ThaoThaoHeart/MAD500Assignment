import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  static contentCount = 0;
  contentList: Content[];

constructor() {
  this.contentList = [{
    id: 0,
    author: "Person",
    imgUrl: "",
    type: "",
    title: "A Title",
    body: "The Body",
    tags: []
  },
    {
      id: 1,
      author: "Person 1",
      imgUrl: "",
      type: "",
      title: "A Title 1",
      body: "The Body 1",
      tags: []
    },
    {
      id: 2,
      author: "Person 2",
      imgUrl: "",
      type: "",
      title: "A Title 2",
      body: "The Body 2",
      tags: []
    },
    {
      id: 3,
      author: "Person 3",
      imgUrl: "",
      type: "",
      title: "A Title 3",
      body: "The Body 3",
      tags: []
    },
    {
      id: 4,
      author: "Person 4",
      imgUrl: "",
      type: "",
      title: "A Title 4",
      body: "The Body 4",
      tags: []
    }
  ]
}

  //When Instantiate, structure called.
  public ngOnInit(): void{

    // this.processContent(contentItem);

    // let list: ContentList;
    // list = new ContentList();
    // list.items = [{
    //   id: 0,
    //   author: "Another Person",
    //   imgUrl: "Something",
    //   title: "A Title",
    //   body: "The Body"
    // }]
  //   console.log("This is the one", list.items);


  };

  // public processContent(content: Content): void{
  //   console.log(content.body)
  // }

}



