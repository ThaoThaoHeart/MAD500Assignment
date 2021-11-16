import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {HttpHeaders} from "@angular/common/http";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  @Output() newContentItem: any;
  @Output() contentList: Content[] = [];

  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body:any;
  tags: any;

  constructor(public contentService: ContentService, private messageService: MessageService ) {
  }

  ngOnInit(): void {

  }

  save(): void {
    if (this.id && this.author && this.title && this.body) {
      this.newContentItem = {
        id: this.id,
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(",")
      }
    }


    this.contentService.addContent(this.newContentItem).subscribe(content => {
      this.contentList.push(content)
      this.contentList = [...this.contentList];
      //add message
      this.messageService.add(`Content Added with id=${this.newContentItem.id}`);
    });


  }

  update(): void {
    this.contentList[this.newContentItem.id || 0] = this.newContentItem;

    this.contentService.updateContent(this.newContentItem).subscribe(() => {
      console.log("Content updated:");
    });
  }
}
