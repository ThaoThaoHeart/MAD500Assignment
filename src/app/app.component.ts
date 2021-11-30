import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContentService} from "./services/content.service";
import {LogUpdateService} from "./services/log-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Angular';

constructor(private contentService: ContentService,
            private logService: LogUpdateService) {

}

  //When Instantiate, structure called.
  public ngOnInit(): void{
  };




}



