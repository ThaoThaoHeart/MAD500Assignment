import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

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

  public showId(){
    console.log(this.content.id);
  }
}
