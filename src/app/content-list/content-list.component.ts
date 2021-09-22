import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
 @Input() contentList: Content[];

  constructor() {
    this.contentList = [];
  }

  ngOnInit(): void {


  }

}
