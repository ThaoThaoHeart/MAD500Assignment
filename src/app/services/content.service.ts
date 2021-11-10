import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {CONTENT} from "../helper-files/contentDB";
import {Observable, of} from "rxjs";
import { MessageService } from "../message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };

  //private messageService: MessageService - to add message here
  constructor(private http: HttpClient ) { }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/content", content,
      this.httpOptions);
  }

  getContent(): Observable<Content[]>{
    // const contentList = of(CONTENT);
    // this.messageService.add('ContentService: fetched contentList');
    // return contentList;
    return this.http.get<Content[]>("api/content");
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/content", content,
      this.httpOptions);
  }

}
