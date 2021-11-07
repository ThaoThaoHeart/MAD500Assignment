import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDB";
import {Observable, of} from "rxjs";
import { MessageService } from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[]{
    return CONTENT;
  }


  getContentObs(): Observable<Content[]>{
    const contentList = of(CONTENT);
    this.messageService.add('ContentService: fetched contentList');
    return contentList;
  }
}
