import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
//import { CONTENT } from "../helper-files/contentDB";
import { MessageService } from "../message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient ) { }

  getContent(): Observable<Content[]>{
    // const contentList = of(CONTENT);
    // this.messageService.add('ContentService: fetched contentList');
    // return contentList;
    return this.http.get<Content[]>("api/contentList");
  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/contentList", content,
      this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/contentList", content,
      this.httpOptions);
  }

}
