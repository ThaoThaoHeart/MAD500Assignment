import { Component} from '@angular/core';
import {ContentList} from "../helper-files/content-list";
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  contents: ContentList = new ContentList();

  ngOnInit(): void {

     let item: Content = {
      id: 1,
      author: "Jenny Hoang",
      title: "My Title",
      body: "Some kind of info"
    };

    this.contents.add(item);

    let item2: Content = {
      id: 2,
      author: "Person 2",
      title: "Their title 2",
      body: "Some more info 2"
    }
    this.contents.add(item2);

    let item3: Content = {
      id: 3,
      author: "Person 3",
      title: "Their title 3",
      body: "Some more info 3"
    }

    this.contents.add(item3);

  }


}
