import {Component, OnInit} from '@angular/core';
import {Content} from "./helper-files/content-interface";
import {ContentService} from "./services/content.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Angular';

constructor(private contentService: ContentService) {
}

  //When Instantiate, structure called.
  public ngOnInit(): void{
  };




}



