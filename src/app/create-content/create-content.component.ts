import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter } from "@angular/core";
import {Content} from "../helper-files/content-interface";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
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

  addContent(): void {
    let ourPromise = new Promise((success, fail) =>{
      if (this.id && this.author && this.title && this.body){
        this.newContentEvent.emit({
          id: this.id,
          author: this.author,
          imgUrl: this.imgUrl,
          type: this.type,
          title: this.title,
          body: this.body,
          tags: this.tags
        })
        success("Success was achieved!");
      }else{
        fail("Failure :(");
      }
    });

    ourPromise.then((message) => {
      console.log(message)
    }).catch((message) => {
      console.log(message)
    })

  }

}
