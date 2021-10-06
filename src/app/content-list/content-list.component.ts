import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() contentList: Content[];
  @Input() content: Content;

  constructor() {
    this.contentList = [];
    this.content = {
      id: 0,
      author: "",
      imgUrl: "",
      type: "",
      title: "",
      body: "",
      tags: []
    }
  }

  ngOnInit(): void {
    this.contentList = [{
      id: 0,
      author: "Person",
      imgUrl: "https://images.pexels.com/photos/5417666/pexels-photo-5417666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      type: "Live",
      title: "A Title",
      body: "The Body",
      tags: ["Tag1", "Tag2"]
      },
      {
        id: 1,
        author: "Person 1",
        imgUrl: "https://images.pexels.com/photos/5417666/pexels-photo-5417666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        type: "Life",
        title: "A Title 1",
        body: "The Body 1",
        tags: ["Tag1", "Tag2"]
      },
      {
        id: 2,
        author: "Person 2",
        imgUrl: "https://images.pexels.com/photos/5417666/pexels-photo-5417666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        type: "Live",
        title: "A Title 2",
        body: "The Body 2",
        tags: ["Tag1", "Tag2"]
      },
      {
        id: 3,
        author: "Person 3",
        imgUrl: "",
        type: "Life",
        title: "A Title 3",
        body: "The Body 3",
        tags: ["Tag1", "Tag2"]
      },
      {
        id: 4,
        author: "Person 4",
        imgUrl: "https://images.pexels.com/photos/5417666/pexels-photo-5417666.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        type: "Live",
        title: "A Title 4",
        body: "The Body 4",
        tags: ["Tag1", "Tag2"]
      }
    ]

  }

  triggerAlert(name: string): void{
    let nameExists = false;
    for(let i = 0; i < this.contentList.length; i++) {
      if (name.toLowerCase() == this.contentList[i].title.toLowerCase()) {
        nameExists = true;
      }
    }

    if(nameExists) {
      alert("The title: \"" + name + "\" exists!");
    } else {
      alert("The title: \"" + name + "\" does not exist.");
    }


      // alert("This is bob");
      // setTimeout(() => console.log("This be Bobby"), 0); //after 0 seconds
      // console.log("Show dot value", this.dot);
    }


}
