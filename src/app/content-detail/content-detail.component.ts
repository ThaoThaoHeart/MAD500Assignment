import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  id: number = 0;
  content: any = {};
  contentList: Content[] = [];
  constructor( private route: ActivatedRoute, private contentService: ContentService) {

  }

  ngOnInit(): void {
    //async sending id
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
    });

    this.contentService.getContentItem(this.id).subscribe(
      c => {this.content = c; console.log(this.content)}
    );

    this.contentService.getContent().subscribe(contentList => {
      this.contentList = contentList
    });
  }

}
