import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  // @Output() newContentEvent = new EventEmitter<Content>();

  newContentItem: Content;
  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body:any;
  tags: any;

  constructor() {
    this.newContentItem = {
      id: 0,
      author: "",
      imgUrl: "",
      type: "",
      title: "",
      body: "",
      tags: []
    }
  }

  ngOnInit(): void {
  }


}
