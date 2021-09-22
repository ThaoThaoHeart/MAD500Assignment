import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentListComponent} from "../content-list/content-list.component";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit{
  @Input() content: Content;

  constructor() {
    this.content = {
      id: 1,
      author: "Jenny Hoang",
      title: "My Title",
      imgUrl: "",
      type: "",
      body: "",
      tags: []
    };
  }

  ngOnInit(): void {

  }


}
