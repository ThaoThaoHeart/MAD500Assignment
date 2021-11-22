import {Component, Inject, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CreateComponentComponent} from "../create-component/create-component.component";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() contentList: Content[] = [];
  @Input() content: any;

  public constructor(public contentService: ContentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getContentList();
  }

  //DIALOG
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateComponentComponent, {
      width: '400px',
      height: '90%',
      data: { },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }


  getContentList(): void {
    this.contentService.getContent().subscribe(contentList => {
      this.contentList = contentList
    });
  }

  //$event
  addContentToList(newContentItem: Content): void{
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
