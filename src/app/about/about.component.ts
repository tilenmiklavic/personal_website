import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills = [
    {
      "name": "html",
      "icon": "fa-html5"
    },
    {
      "name": "css",
      "icon": "fa-css3-alt"
    },
    {
      "name": "JavaScript",
      "icon": "fa-js-square"
    },
    {
      "name": "Angular",
      "icon": "fa-angular"
    },
    {
      "name": "NodeJS",
      "icon": "fa-node-js"
    },
    {
      "name": "Java",
      "icon": "fa-java"
    },
    {
      "name": "Python",
      "icon": "fa-python"
    }
  ];
  otherSkills = [
    {
      "name": "Photoshop",
      "icon": "adobe-photoshop"
    },
    {
      "name": "Lightroom",
      "icon": "adobe-lightroom"
    },
    {
      "name": "Illustrator",
      "icon": "adobe-illustrator"
    }
  ];
}
