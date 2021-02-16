import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navFirst: string = "UGA";
  navSecond: string = "BUGA";

  monkeReveal(index: number): void {
    if (index == 1) {
      this.navFirst = "PHOTOGRAPHY";
    } else if (index == 2) {
      this.navSecond = "ABOUT";
    }
  }

  monkeHide(): void {
    this.navFirst = "UGA";
    this.navSecond = "BUGA";
  }
}
