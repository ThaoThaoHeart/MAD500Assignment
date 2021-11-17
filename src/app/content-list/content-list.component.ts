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
  @Input() contentList: Content[] = [];
  @Input() content: any;
  public constructor(public contentService: ContentService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getContentList();
  }


  getContentList(): void {
    this.contentService.getContent().subscribe(contentList => {
      this.contentList = contentList
    });
  }

  //$event
  addContentToList(newContentItem: Content): void{
    console.log("got here");
      this.getContentList()
  }

  updateContentToList(updateContentItem: Content): void{
      this.contentList.forEach(element => {
        if(element.id === updateContentItem.id){
          element = updateContentItem;
        }
      })
    this.getContentList()
  }

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



}
