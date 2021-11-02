import { Component } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  contentList: Content[] = [];

constructor() {
}

  //When Instantiate, structure called.
  public ngOnInit(): void{
    this.contentList = this.contentService.getContent();

  };

  // public processContent(content: Content): void{
  //   console.log(content.body)
  // }




}



