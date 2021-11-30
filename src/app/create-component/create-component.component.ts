import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";


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
  body: any;
  tags: any;

  constructor(public contentService: ContentService, public _snackBar: MatSnackBar
  , public dialogRef: MatDialogRef<CreateComponentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {

  }

  onNoClick(): void {

    this.id = '';
    this.author = '';
    this.imgUrl = '';
    this.type = '';
    this.title = '';
    this.body = '';
    this.tags = [];

    this.dialogRef.close(this.data);
  }

  openSnackBarAddedContent() {
    this._snackBar.open("Content Added!", "Ok", {
      duration: 2000
    });
  }

  openSnackBarUpdatedContent() {
    this._snackBar.open("Content Updated!", "Ok", {
      duration: 2000
    });
  }

  addContent(): void {
    if (this.author && this.title && this.body) {
      this.newContentItem = {
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(",")
      }

      this.contentService.addContent(this.newContentItem).subscribe(content => {
        //Add to contentList
        this.newContentEvent.emit(content);
      });

      this.data = this.newContentItem;

      this.openSnackBarAddedContent();
      this.onNoClick();
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

      this.data = this.newContentItem;

      this.openSnackBarUpdatedContent();
      this.onNoClick();
    }
  }


}


