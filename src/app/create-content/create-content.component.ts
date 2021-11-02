import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter } from "@angular/core";
import {Content} from "../helper-files/content-interface";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContent = new EventEmitter<Content>();
  newContentItem: Content;

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

  createContent(id: string, author: string, imgUrl: string ,type: string, title: string, body: string, tag: string): void {
    this.newContentItem.id = parseInt(id);
    this.newContentItem.author = author
    this.newContentItem.imgUrl = imgUrl
    this.newContentItem.type = type
    this.newContentItem.title = title
    this.newContentItem.body = body
    this.newContentItem.tags?.push(tag);
    this.newContent.emit(this.newContentItem);

    let ourPromise = new Promise((success, fail) =>{

      if (this.newContent.closed){
        success("Success was achieved!");
      }
      else{
        fail("Failure :(");
      }
    })

    ourPromise.then((message) => {
      console.log(message)
    }).catch((message) => {
      console.log(message)
    })

  }

}
