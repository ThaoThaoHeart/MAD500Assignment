import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MessageService} from "./message.service";
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private messageService: MessageService, private http: HttpClient ) { }

  getContent(): Observable<Content[]>{
    this.messageService.add("Content Received!");
    return this.http.get<Content[]>("api/contentList");
  }

  getContentItem(id: number): Observable<Content>{
    this.messageService.add("Got the Content!");
    return this.http.get<Content>("api/contentList/" + id);
  }


  addContent(content: Content): Observable<Content>{
    this.messageService.add("Content Added!");
    return this.http.post<Content>("api/contentList", content,
      this.httpOptions);
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/contentList", content,
      this.httpOptions);
  }

}
