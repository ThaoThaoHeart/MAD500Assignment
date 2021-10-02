import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular';
  public dot: any;

constructor() {
  this.dot = "Matrix"
}

  //When Instantiate, structure called.
  public ngOnInit(): void{

    // this.processContent(contentItem);

    // let list: ContentList;
    // list = new ContentList();
    // list.items = [{
    //   id: 0,
    //   author: "Another Person",
    //   imgUrl: "Something",
    //   title: "A Title",
    //   body: "The Body"
    // }]
  //   console.log("This is the one", list.items);


  };

  // public processContent(content: Content): void{
  //   console.log(content.body)
  // }




}



