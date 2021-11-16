import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
//import { CONTENT } from "../helper-files/contentDB";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  // @Input() contentList: Content[];
  // @Input() content: Content;
  //
  // constructor(private contentService: ContentService) {
  //   this.contentList = [];
  //   this.content = {
  //     id: 0,
  //     author: "",
  //     imgUrl: "",
  //     type: "",
  //     title: "",
  //     body: "",
  //     tags: []
  //   }
  // }
  //
  // ngOnInit(): void {
  //   this.contentList = this.contentService.getContent();
  //
  // }

  selectedContent?: Content;
  @Input() contentList: Content[] = [];

  public constructor(public contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    //this.getContentList();
    this.contentService.getContent().subscribe(
      contentList => {
      this.contentList = contentList
    });
  }

  onSelect(content: Content): void {
    this.selectedContent = content;
    this.messageService.add(`ContentComponent: Selected content id=${content.id}`);
  }

  // getContentList(): void {
  //   this.contentService.getContent().subscribe(contentList => {
  //     this.contentList = contentList
  //   });
  // }

  triggerAlert(name: string): void{
    let nameExists = false;
    for(let i = 0; i < this.contentList.length; i++) {
      if (name.toLowerCase() == this.contentList[i].title.toLowerCase()) {
        nameExists = true;
      }
    }

    if(nameExists) {
      alert("The title: \"" + name + "\" exists!");
    } else {
      alert("The title: \"" + name + "\" does not exist.");
    }

      // setTimeout(() => console.log("This be Bobby"), 0); //after 0 seconds
    console.log(this.contentList)
    }


    // addContentToList(newContent: Content) {
    //   this.contentList.push(newContent);
    //   //clone the array for the pipe to work
    //   this.contentList = [...this.contentList];
    //   //.contentList = Object.assign([], this.contentList);
    // }


}
