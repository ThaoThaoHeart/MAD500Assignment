import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
  newContentItem: any;
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();

  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body:any;
  tags: any;

  constructor(public contentService: ContentService) {
  }

  ngOnInit(): void {

  }

  addContent(): void {
    if ( this.author && this.title && this.body) {
      this.newContentItem = {
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(",")
      }
      console.log("new content before", this.newContentItem);
      this.contentService.addContent(this.newContentItem).subscribe(content => {
        console.log("new content after", content);
        //Add to contentList
        this.newContentEvent.emit(content);
      });
    }
  }
  updateContent(): void {
    if (this.id && this.author && this.title && this.body) {
      this.newContentItem = {
        id: parseInt(this.id),
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(",")
      }

      this.contentService.updateContent(this.newContentItem).subscribe(() => {
        //Update
        this.updateContentEvent.emit(this.newContentItem);
      });
    }
  }


}
